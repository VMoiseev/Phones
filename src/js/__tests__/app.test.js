import Phonevalidator from '../app';

test('Из 8 (927) 000-00-00 должно получаться +79270000000', () => {
  const phone = new Phonevalidator('8(927)000-00-00');
  expect(phone.validatePhones()).toBe('+79270000000');
});

test('Из +7 960 000 00 00 должно получаться +79600000000', () => {
  const phone = new Phonevalidator('+7 960 000 00 00');
  expect(phone.validatePhones()).toBe('+79600000000');
});

test('Из +86 000 000 0000 должно получаться +860000000000', () => {
  const phone = new Phonevalidator('+86 000 000 0000');
  expect(phone.validatePhones()).toBe('+860000000000');
});
