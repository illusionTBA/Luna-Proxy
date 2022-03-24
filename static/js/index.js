

/* FPS counter
let be = Date.now(),fps=0;
requestAnimationFrame(
    function loop(){
        let now = Date.now()
        fps = Math.round(1000 / (now - be))
        be = now
        requestAnimationFrame(loop)
        if (fps < 35){
          console.log("%c"+"FPS:"+fps,"color:red")
        } if (fps >= 35 && fps <= 41) {
            console.log("%c"+"FPS:"+fps,"color:deepskyblue")

          } else {
            console.log("%c"+"FPS:"+fps,"color:black")

        }
    }
 )
 */



function tabtitle() {
    window.localStorage.setItem("title", titlechange.value);
    window.document.title = titlechange.value;
};

if (window.localStorage.hasOwnProperty('title')) {
    document.title = title;
};


//Tab Icon
function tabicon() {
    document.head.querySelector("link[rel=icon]").href = titlechange.value;
    window.localStorage.setItem("icon", titlechange.value);
    loadPicture()
};

if (window.localStorage.hasOwnProperty("icon")) {
    document.querySelector("link[rel=icon]").href = icon;
};

//Sets image to the tab icon
function loadPicture() {
    if (window.localStorage.hasOwnProperty("icon")) {
        pageicon.setAttribute("src", localStorage.getItem("icon"));
    } else {
        pageicon.setAttribute("src", "../images/moon.png");
    };
};

//Clears Tab Icon and Title
function resetTab() {
    let items = ["icon", "title"];

    items.forEach(item =>
        localStorage.removeItem(item));
    window.location.reload();
    pageicon();
};


