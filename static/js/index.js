

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


//Tab Title
let title = localStorage.getItem("title"),
    icon = localStorage.getItem("icon"),
    pageicon = document.getElementById("pageicon");
const titleBTN = document.querySelector("#cloakTitle");
const titlechange=document.querySelector('#cloakInput');

function tabtitle() {
    console.log(titlechange.value, titleBTN)
    window.localStorage.setItem("title", titlechange.value);
    window.document.title = titlechange.value;
    alert("reload to page to see the changes");
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


// Settings 
const tbOption = document.getElementById("tb");
const particlesOption = document.getElementById("particles");
const tabcloakingDiv = document.querySelector(".tabcloaking");


function displayTB(){
  tabcloakingDiv.style.display = "block";
}



let 
  savedwomUrl = localStorage.getItem("savedwomUrl"),
  saveduvUrl = localStorage.getItem("saveduvUrl");

// continue womginx btn
if (window.localStorage.hasOwnProperty('savedwomUrl')){
  document.querySelector('.womResume').style.display = "block"
} else {
  document.querySelector('.uvResume').style.display = "none"
}

// continue Ultra-violet
if (window.localStorage.hasOwnProperty('saveduvUrl')){
  document.querySelector('.uvResume').style.display = "block"
} else {
  document.querySelector('.uvResume').style.display = "none"
}

function womresume(){
  iframe.src = savedwomUrl;
  document.querySelector('.womResume').style.display = "none";
  document.querySelector('.uvResume').style.display = "none";
 
}
function uvresume(){
  iframe.src = saveduvUrl;
  document.querySelector('.uvResume').style.display = "none";
  document.querySelector('.womResume').style.display = "none";
  
}

function REbtns(){
  document.querySelector('#exitBTN').style.display = "block";
  document.querySelector('#reloadBTN').style.display = "block";
}

function resumebtnshide(){
  document.querySelector('.uvResume').style.display = "none";
  document.querySelector('.womResume').style.display = "none";
}