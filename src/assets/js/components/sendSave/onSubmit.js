import savePerson from "./savePerson.js";

const onSubmit = () => {
    const name = document.querySelector(".input-name");
    const email = document.querySelector(".input-email");
    const cpf = document.querySelector(".input-cpf");
    const phone = document.querySelector(".input-phone");

    let newPerson = {
        name: name.value,
        cpf: cpf.value,
        phone: phone.value,
        email: email.value
    };
    return savePerson(newPerson);
};

export default onSubmit;
