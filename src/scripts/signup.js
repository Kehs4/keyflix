function NumberMask() {
const telefoneInput = document.getElementById('signup-number');

    telefoneInput.addEventListener('input', function (e) {
      let input = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

      if (input.length > 11) input = input.slice(0, 11); // Limita a 11 dígitos

      let formatted = input;

      if (input.length > 0) {
        formatted = '(' + input.substring(0, 2);
      }
      if (input.length >= 3) {
        formatted += ') ' + input.substring(2, 7);
      }
      if (input.length >= 8) {
        formatted += '-' + input.substring(7, 11);
      }

      e.target.value = formatted;
    });
}
export default NumberMask;