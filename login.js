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