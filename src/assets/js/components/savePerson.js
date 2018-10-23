import getPersons from './getPersons.js';

const PERSONS = 'persons';

const savePerson = (newPerson) => {
  let persons = getPersons();
  for(let c = 0; c < persons.length; c++) {
    if(persons[c].cpf == newPerson.cpf) {
      return;
    }
  }
  persons.push(newPerson);
  localStorage.setItem(PERSONS, JSON.stringify(persons));
};

export default savePerson;
