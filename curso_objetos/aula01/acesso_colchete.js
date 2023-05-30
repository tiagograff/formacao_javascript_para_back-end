const cliente = {
    nome: 'andre',
    idade: 32,
    cpf: '1122233345',
    email: 'andre@dominio.com',
  };
  
  console.log(
    `o nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente['idade']} anos.`
  );
  
  const chaves = ['nome', 'idade', 'cpf', 'email'];
  
  chaves.forEach((chave) => {
    console.log(`a chave ${chave} tem valor ${cliente[chave]}`);
  });