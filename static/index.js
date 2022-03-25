const form = document.querySelector('form');
const input = document.querySelector('input');
const iframe = document.querySelector('iframe');
const uvbtn = document.querySelector('#uvBtn');
const exitbtn = document.querySelector('#exitBTN');
const reloadbtn = document.querySelector('#reloadBTN');

uvbtn.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

        iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);

    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};


// womginx
let womurl = input.value;
const wombtn = document.querySelector('#womBtn');

wombtn.addEventListener('click', function(exitbtn) {
  let url = input.value.trim();
  if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
  else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
  iframe.src = "[your womginx url]/main/"+url;

})


// reload & Exit buttons 

 
exitbtn.addEventListener('click', function(exitbtn) {
  iframe.src = '';
})

 
reloadbtn.addEventListener('click', function(exitbtn) {
  iframe.src = iframe.src;
  
})




