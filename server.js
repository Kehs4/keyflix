const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9000;

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
  host: 'localhost', // Ou o endereço do servidor do banco
  database: 'keyflix', // Nome do banco de dados
  port: 5432, // Porta padrão do PostgreSQL
});

// Testando a conexão
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados:', err.stack);
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
  release();
});

module.exports = pool;

// Configuração do CORS
app.use(cors());

// Middleware para processar JSON
app.use(bodyParser.json());

// Endpoint para inserir dados no banco
app.post('/api/signup', async (req, res) => {
  console.log('Dados recebidos:', req.body); // Log para verificar os dados recebidos

  const {
    name,
    surname,
    email,
    password,
    phone,
    cep,
    address,
    number,
    complement,
    city,
    state,
    birthdate,
  } = req.body;

  if (!name || !surname || !email || !password) {
    return res.status(400).json({ error: 'Campos obrigatórios estão faltando.' });
  }

  try {
    const query = `
      INSERT INTO users (name, surname, email, password, phone, cep, address, number, complement, city, state, birthdate)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING id;
    `;
    const values = [name, surname, email, password, phone, cep, address, number, complement, city, state, birthdate];

    const result = await pool.query(query, values);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', userId: result.rows[0].id });
  } catch (error) {
    console.error('Erro ao inserir dados no banco:', error);
    res.status(500).json({ error: 'Erro ao cadastrar o usuário.' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});