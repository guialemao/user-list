import onSubmit from "../sendSave/onSubmit";

const addRegister = () => {
    const btn = document.querySelector(".button");
    btn.classList.add("added");
    onSubmit();
    setTimeout(function() {
        window.location.href = "/list-register.html";
    }, 1000);
};

export default addRegister;
