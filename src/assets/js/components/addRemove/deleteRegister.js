import getPersons from '../getData/getPersons.js';

const PERSONS = 'persons';

const deleteRegister = (cpf) => {
  let persons = getPersons();
  persons.map(person => {
    if(person.cpf == cpf) {
      person.deleted = true;
      localStorage.setItem(PERSONS, JSON.stringify(persons));
      return window.location.href = '/list-register.html';
    }
  })
};

export default deleteRegister;
