const fs = require('fs');

test('La página contiene "¡Hola Mundo!"', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  expect(html).toMatch(/¡Hola Mundo!/);
});
