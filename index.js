const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const properties = [];

function getProperties() {
  rl.question('Digite uma propriedade de CSS (ou SAIR para encerrar):\n', (property) => {
    if (property.toUpperCase() === 'SAIR') {
      properties.sort();
      console.log('Propriedades de CSS ordenadas:');
      properties.forEach((p) => console.log(p));
      rl.close();
    } else {
      properties.push(property);
      getProperties();
    }
  });
}

getProperties();
