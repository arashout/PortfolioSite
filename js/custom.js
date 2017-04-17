window.onload = function () {
    unhideDivs();
}
/**
 * For slowly unhiding divs...
 * Not yet properly implemented...
 * @returns {[[Type]]} [[Description]]
 */
function unhideDivs(){
    var hiddenDivs = document.getElementsByClassName('hidden');
    var arrDivs = nodelistToArray(hiddenDivs);
    arrDivs.reverse();
    for(var i = arrDivs.length - 1; i >= 0; i--){
        arrDivs[i].classList.remove("hidden");
    }
    return 0;
}
function changeBaseURL(){
    var baseTagElement = document.getElementById("baseURL");
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
        baseTagElement.setAttribute("href","http://127.0.0.1:57020/")
    }
    else{
        baseTagElement.setAttribute("href","https://arashout.github.io/arashout/")
    }
    return 0;
}
/**
 * Change project thumbnails on mouse hover
 * @param  {[type]} element   [description]
 * @param  {[type]} imagePath [description]
 * @return {[type]}           [description]
 */
function hover(element, imagePath) {
    element.setAttribute('src', imagePath);
}
function unhover(element, imagePath) {
    element.setAttribute('src', imagePath);
}