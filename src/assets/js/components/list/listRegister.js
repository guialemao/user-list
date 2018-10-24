import getPersons from '../getData/getPersons.js';

const listRegister = () => {
  let persons = getPersons();
  let listContainter = document.querySelector(".list-container");
  let templatePerson =`
    <ul>
      ${persons.map((person,i) => {
        if(!person.deleted) {
          return `<li data-cpf=${person.cpf}>
            <span>Nome: ${person.name}</span>
            <span>CPF: ${person.cpf}</span>
            <span>Phone: ${person.phone}</span>
            <span>Email: ${person.email}</span>
            <span class="delete-button" data-id="${i}">Excluir</span>
          </li>`
        }
      }).join('')}
    </ul>
    <a href="/" class="lnk-back">Voltar para o Cadastro</a>
  `;
  listContainter.innerHTML = templatePerson;
};

export default listRegister;
