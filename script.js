const buttonOpen = document.getElementById("modalOpen");
const buttonClose = document.querySelector(".modalClose");

buttonOpen.addEventListener("click", () => {
    styleChangeId("modal","display","block");
    styleChangeClass("body","overflow","hidden");
});

function styleChangeId(docName, styleName, parameter) {
    let docId = document.getElementById(docName);
    docId.style[styleName] = parameter;
}
function styleChangeClass(docName, styleName, parameter) {
    let docClass = document.querySelector("." + docName);
    docClass.style[styleName] = parameter;
}

buttonClose.addEventListener("click", () => {
    styleChangeId("modal","display","none");
    styleChangeClass("body","overflow","visible");
});

document.addEventListener("click", (e) => {
    if(e.target == modal) {
        styleChangeId("modal","display","none");
        styleChangeClass("body","overflow","visible");
    }
});