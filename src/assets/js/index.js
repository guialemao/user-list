import "../sass/main.scss";
import form from "./components/formValidation/formNameValidation.js";
import savePerson from "./components/sendSave/savePerson.js";
import listRegister from "./components/list/listRegister.js";
import addRegister from "./components/addRemove/addRegister.js";
import deleteRegister from "./components/addRemove/deleteRegister.js";
import getInitialData from "./components/getData/getInitialData.js";

function initApp() {
    const name = document.querySelector(".input-name");
    const email = document.querySelector(".input-email");
    const cpf = document.querySelector(".input-cpf");
    const phone = document.querySelector(".input-phone");
    const btn = document.querySelector(".button");

    let initialData = getInitialData();
    initialData.map(data => savePerson(data));

    if (window.location.pathname !== "/list-register.html") {
        if (btn !== null) {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                if (
                    name.value.length <= 0 ||
                    email.value.length <= 0 ||
                    cpf.value.length <= 0 ||
                    phone.value.length <= 0
                ) {
                    btn.classList.add("disabled");
                } else {
                    addRegister();
                }
            });
        }
    } else {
        listRegister();

        document.addEventListener("DOMContentLoaded", function() {
            let del_btn = document.querySelectorAll(".delete-button");
            for (let cont = 0; cont < del_btn.length; cont++) {
                del_btn[cont].addEventListener("click", function(e) {
                    let cpf = e.currentTarget.parentNode.getAttribute(
                        "data-cpf"
                    );
                    deleteRegister(cpf);
                });
            }
        });
    }
}

initApp();

export default initApp;
