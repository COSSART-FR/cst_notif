const container = document.getElementById("container");

let defaultText = config.defaultText;
let defaultBackgroundColor = config.defaultBackgroundColor;
let defaultTimer = config.defaultTimer;
let defaultLogo = config.defaultLogo;
//console.log(defaultLogo, defaultTimer, defaultBackgroundColor, defaultLogo, '--> [PARAMETRE DEFAULT CONFIG]')
createNotification = function(txt, time, color, image) {
    let timing = time;
    let message = txt;
    let logo = "img/" + image + ".png";
    //console.log(txt, time, color, image, '[createNotification]')
    const notif = document.createElement("div");
    notif.className = "toast";
    //La partie Text + Logo
    if(message == undefined && logo == undefined){
        //console.log(defaultText, defaultLogo," --> [1]")
        notif.innerHTML = '<img src="' + defaultLogo + '"><h4>' + defaultText + '</h4>';
    }else if(message && image == undefined){
        //console.log(txt, defaultLogo," --> [2]")
        notif.innerHTML = '<img src="' + defaultLogo + '"><h4>' + txt + '</h4>';
    }else if(image && message == undefined){
        //console.log(defaultText, logo," --> [3]")
        notif.innerHTML = '<img src="' + logo + '"><h4>' + defaultText + '</h4>';
    }else{
        //console.log(txt, logo," --> [4]")
        notif.innerHTML = '<img src="' + logo + '"><h4>' + txt + '</h4>';
    }

    //La partie couleur
    if(color == undefined){
        notif.style.background = defaultBackgroundColor;
    }else{
        notif.style.background = color;
    }

    container.appendChild(notif);

    //La partie Timer
    if(timing == undefined){
        setTimeout(() => {
            notif.classList.add("remove-notif");
        }, defaultTimer);
        setTimeout(() => {
            notif.remove();
        }, defaultTimer + 500);
    }else{
        setTimeout(() => {
            notif.classList.add("remove-notif");
        }, timing);
        setTimeout(() => {
            notif.remove();
        }, timing + 500);
    }
}

window.addEventListener('message', (event) => {
	let data = event.data
	if(data.action == true){
		createNotification(data.message, data.timing, data.rgba, data.image)
	}
})