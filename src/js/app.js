export default class Phonevalidator {
  constructor(numbers) {
    this.numbers = numbers;
  }

  validatePhones() {
    const phone = this.numbers;
    const validateNumbers = phone.replace(/\D/g, '');
    if (validateNumbers.length > 11) {
      return validateNumbers.replace(/^8/, '+8');
    }
    return validateNumbers.replace(/^(8|7)/, '+7');
  }
}
