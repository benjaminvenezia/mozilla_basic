const picture = document.getElementById('main-image');

picture.addEventListener("click", function(el=picture, img1='images/firefox1.png', img2='images/firefox2.png') {
    
    let src_img =  el.toElement.src + "";
    let split_src = src_img.split("/");
    let urlToCompare = split_src[split_src.length - 2] + "/" + split_src[split_src.length - 1];

    if (urlToCompare == img1) {
        el.toElement.src = img2;
    } else {
        el.toElement.src = img1;
    }
}
)
