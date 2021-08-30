
const mainBtn = document.getElementsByClassName('btn');

mainBtn[0].addEventListener("click", changeUser);

function changeUser() {
    let name = '';
    do {
        name = prompt("Please enter your name");
    } while (name == '');

    let title = document.querySelector('h1');

    title.textContent = "Mozilla is cool, " + name;
}
