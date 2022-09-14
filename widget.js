var head = document.getElementsByTagName('HEAD');
var link = document.createElement('link');


var mainContainer = document.createElement('div')
mainContainer.id = 'root'

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'build/static/css/main.e6c13ad2.css';

// Append link element to HTML head 
document.getElementsByTagName('HEAD')[0].appendChild(link);
document.getElementsByTagName('body')[0].appendChild(mainContainer);

window.booknow = (obj) => {
    mainContainer.style.display = 'unset'
    var script = document.getElementById('main-script')
    if (!script) {
        var script = document.createElement('script')
        script.src = 'build/static/js/main.1c620c97.js'
        script.id = 'main-script'
        document.getElementsByTagName('body')[0].appendChild(script);
    }
    return console.log(obj)
}

window.close = (obj) => {
    mainContainer.style.display = 'none'
    return console.log(obj)
}