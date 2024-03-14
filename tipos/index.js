"use strict";
// Tipos
// let nome: string = 'juan';
// let idade: number = 25;
// let casado: boolean = false;
// let nomeCompleto: String
// let endereco = "Rua 13 de Maio, 12"
// console.log(`Olá ${nome} você tem ${idade} anos e mora no endereço ${endereco}`)
const usuarios = [
    { id: 1, nome: "Jordan", idade: 34, ativo: true },
    { id: 2, nome: "Joana", idade: 54, ativo: true },
    { id: 3, nome: "Janete", idade: 20, ativo: true },
];
usuarios.forEach(usuario => {
    console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}, Idade: ${usuario.idade}, Ativo: ${usuario.ativo}`);
});
//b
const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
console.log("Nome e ID dos usuários ativos:");
usuariosAtivos.forEach(usuario => {
    console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}`);
});
//c
const usuariosMaiores25 = usuarios.filter(usuario => usuario.idade > 25);
console.log("Nome das pessoas maiores de 25 anos de idade e sua idade:");
usuariosMaiores25.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
});
//d
const nomeUsuario = usuarios.map(usuario => usuario.nome);
console.log("Nomes dos usuários:");
console.log(nomeUsuario);
//e
const aumentarIdade = usuarios.map(usuario => (Object.assign(Object.assign({}, usuario), { idade: usuario.idade + 1 })));
console.log("Usuários com idade aumentada:");
aumentarIdade.forEach(usuario => {
    console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}, Idade: ${usuario.idade}, Ativo: ${usuario.ativo ? 'Sim' : 'Não'}`);
});
//f
console.log("Nome de usuarios e seus status:");
usuarios.forEach(usuario => {
    const status = usuario.ativo ? "ativo" : "inativo";
    console.log(`Nome: ${usuario.nome}, Status: ${status}`);
});
//g
const idadeTotal = usuarios.reduce((totalIdade, usuario) => totalIdade + usuario.idade, 0);
console.log("Idade total dos usuários:", idadeTotal);
//h
const totalAtivos = usuarios.reduce((totalAtivos, usuario) => totalAtivos + (usuario.ativo ? 1 : 0), 0);
console.log("Total Ativos:", totalAtivos);
//i
const usuarioJoao = usuarios.find(usuario => usuario.nome === 'João');
if (usuarioJoao) {
    console.log("Usuário encontrado:");
    console.log("ID:", usuarioJoao.id);
    console.log("Nome:", usuarioJoao.nome);
    console.log("Idade:", usuarioJoao.idade);
    console.log("Ativo:", usuarioJoao.ativo ? 'Sim' : 'Não');
}
else {
    console.log("Usuário com o nome 'João' não encontrado.");
}
//j
const usuarioInativo = usuarios.find(usuario => usuario.ativo === false);
if (usuarioInativo) {
    console.log("Usuário encontrado:");
    console.log("ID:", usuarioInativo.id);
    console.log("Nome:", usuarioInativo.nome);
    console.log("Idade:", usuarioInativo.idade);
    console.log("Ativo:", usuarioInativo.ativo ? 'Sim' : 'Não');
}
else {
    console.log("Nenhum usuário inativo foi encontrado.");
}
