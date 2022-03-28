const form = document.querySelector('form');
const input = document.querySelector('input');
const iframe = document.querySelector('iframe');
const uvbtn = document.querySelector('#uvBtn');
const exitbtn = document.querySelector('#exitBTN');
const reloadbtn = document.querySelector('#reloadBTN');

// cookie setup ignore
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}






uvbtn.addEventListener('click', async event => {
  event.preventDefault();
  window.navigator.serviceWorker.register('./sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    let url = input.value.trim();
    if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
    else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

    iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    localStorage.setItem("saveduvUrl", __uv$config.prefix + __uv$config.encodeUrl(url))
    document.querySelector('.uvResume').style.display = "none";
    document.querySelector('.womResume').style.display = "none";
  });
});

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};


// womginx
let womurl = "https://herokuap.floating.cf/main/";
const wombtn = document.querySelector('#womBtn');

wombtn.addEventListener('click', function (exitbtn) {
  let url = input.value.trim();
  if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
  else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
  iframe.src = womurl + url;
  document.querySelector('.uvResume').style.display = "none";
  document.querySelector('.womResume').style.display = "none";
  localStorage.setItem("savedwomUrl", womurl + url)
  document.getElementById('exitBTN').style.display = 'block';
  document.getElementById('reloadBTN').style.display = 'block';


})


// reload & Exit buttons 


exitbtn.addEventListener('click', function (exitbtn) {
  iframe.src = '';
  document.querySelector('.uvResume').style.display = "block";
  document.querySelector('.womResume').style.display = "block";
  document.getElementById('exitBTN').style.display = 'none';
  document.getElementById('reloadBTN').style.display = 'none';
})


reloadbtn.addEventListener('click', function (exitbtn) {
  iframe.src = iframe.src;

})




