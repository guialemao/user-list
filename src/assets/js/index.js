import '../sass/main.scss';
import form from './components/formNameValidation.js';
import savePerson from './components/savePerson.js';
import listRegister from './components/listRegister.js';
import addRegister from './components/addRegister.js';
import deleteRegister from './components/deleteRegister.js';
import getInitialData from './components/getInitialData.js';

const name = document.querySelector(".input-name");
const email = document.querySelector(".input-email");
const cpf = document.querySelector(".input-cpf");
const phone = document.querySelector(".input-phone");
const btn = document.querySelector(".button");

function initApp() {  
  let initialData = getInitialData();
  initialData.map(data => savePerson(data))
  
  if(window.location.pathname !== '/list-register.html') {
    btn.addEventListener("click", function(e){
      e.preventDefault();
      if(name.value.length <= 0 || email.value.length <= 0 || 
      cpf.value.length <= 0 || phone.value.length <= 0) {
        btn.classList.add("disabled");
      } else {
        addRegister()
      }
    });
  } else {
    listRegister();

    document.addEventListener('DOMContentLoaded', function () {
      let del_btn = document.querySelectorAll(".delete-button");
      for(let cont = 0; cont < del_btn.length; cont++) {
        del_btn[cont].addEventListener("click", function(e){
          let cpf = e.currentTarget.parentNode.getAttribute("data-cpf");
          deleteRegister(cpf);
        });
      }
    });
    
  }
}

initApp();
