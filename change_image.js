const picture = document.getElementById('img1');
picture.addEventListener("click", change);

function change() {
    if(picture.getAttribute('src') == 'https://mdn.github.io/beginner-html-site-scripted/images/firefox-icon.png') {
        picture.src = 'https://mdn.github.io/beginner-html-site-scripted/images/firefox2.png';
    } else {
        picture.src = 'https://mdn.github.io/beginner-html-site-scripted/images/firefox-icon.png';
    }
}

