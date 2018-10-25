import initApp from "./index";

const markup = `
  <input class="input-name" />
  <input class="input-cpf" />
  <input class="input-email" />
  <input class="input-phone" />
  <button class="button">Click</button>
`;

describe("Init", () => {
    test("should add disabled class to button", () => {
        document.body.innerHTML = markup;
        window.location.pathname = "/";

        initApp();

        const button = document.querySelector(".button");
        button.click();

        expect(button.classList.contains("disabled")).toBeTruthy();
    });
});
