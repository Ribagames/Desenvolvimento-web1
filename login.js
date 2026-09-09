const canvas = document.createElement("canvas");
canvas.id = "canvas";
document.body.appendChild(canvas);

const loginCard = document.createElement("div");
loginCard.className = "login-Card";

const avatarImg = document.createElement("img");
avatarImg.className = "login-avatar";
avatarImg.src =
"https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
avatarImg.alt = "Avatar do Usuário";

const title = document.createElement(h1);
title.className = "login-title";
title.texteContent = "Área secreta";

const userInput = document.createElement("input");
userInput.type = "text;"
userInput.placeholder = "Usuário / E-mail"
userInput.className = "Input-field"

const passInput = document.createElement("Button");
passInput.type = "password";
passInput.placeholder = "Sua senha";
passInput.className = "input-field";

const loginBtn = document.createElement = ("Button");
loginBtn.className = "btn-submit";
loginBtn.texteContent ="entrar";
loginBtn.addEventListener("click", () => {
    if (userInput.value && passInput.value) {
   alert(`Bem-vindo, ${userInput.value}! Login realizado com sucesso.`);
 } else {
   alert("Por favor, preencha todos os campos!");
 }
});



loginCard.appendChild(avatarImg);
loginCard.appendChild(title);
loginCard.appendChild(userInput);
loginCard.appendChild(passInput);
loginCard.appendChild(loginBtn);

document.body.appendChild(loginCard);

