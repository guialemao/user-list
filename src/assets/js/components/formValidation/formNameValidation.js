export const form = formNameValidation();

function formNameValidation() {
    if (window.location.pathname != "/list-register.html") {
        let input = document.querySelectorAll(".input-txt");
        let btn = document.querySelector(".button");

        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener(
                "focus",
                function() {
                    this.parentElement.classList.add("active");
                },
                false
            );

            input[i].addEventListener(
                "blur",
                function() {
                    if (this.value.length === 0) {
                        this.parentElement.classList.remove("active");
                    }
                },
                false
            );

            input[i].addEventListener(
                "keyup",
                function(e) {
                    let value = this.value;

                    if (value.length === 0 || value.length > 3) {
                        this.parentElement.classList.remove("error");
                        btn.classList.remove("disabled");
                    } else {
                        this.parentElement.classList.add("error");
                        btn.classList.add("disabled");
                        e.preventDefault;
                    }
                },
                false
            );
        }
    }
}
