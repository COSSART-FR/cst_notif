const container = document.getElementById("container");

let defaultText = config.defaultText;
let defaultBackgroundColor = config.defaultBackgroundColor;
let defaultTimer = config.defaultTimer;
let defaultLogo = config.defaultLogo;
let defaultFont = config.defaultFont;
let defaultBorderRadius = config.defaultBorderRadius;
let defaultFontSize = config.defaultFontSize;
let defaultPadding = config.defaultPadding;
let defaultPos = config.defaultPos;
let defaultAnim = config.defaultAnim;
//console.log(defaultLogo, defaultTimer, defaultBackgroundColor, defaultLogo, '--> [PARAMETRE DEFAULT CONFIG]')
createNotification = function(txt, time, color, image, border, font, fontSize, padding,/* pos,*/ animation) {
    let timing = time;
    let message = txt;
    let borderRadius = border;
    let typeFont = font;
    let sizeFont = fontSize;
    let setPadding = padding;
    /*let setPosition = pos*/
    let anim = animation;
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
    }else if(image == 'no' && message){
        notif.innerHTML = "<h4>" + txt + "</h4>'";
       //notif.style.textAlign = 'right'; 
    }else{
        //console.log(txt, logo," --> [4]")
        notif.innerHTML = '<img src="' + logo + '"><h4>' + txt + '</h4>';
    }
    //Bordure background
    if(borderRadius){
        notif.style.borderRadius = border;
    }else{
        notif.style.borderRadius = defaultBorderRadius;
    }
    //La partie couleur
    if(color == undefined){
        notif.style.background = defaultBackgroundColor;
    }else{
        notif.style.background = color;
    }
    //Type de police
    if(typeFont){
        notif.style.fontFamily = font;
    }else{
        notif.style.fontFamily = defaultFont;
    }
    //Taille de la police
    if(sizeFont){
        notif.style.fontSize = fontSize;
    }else{
        notif.style.fontSize = defaultFontSize;
    }
    //Padding
    if(setPadding){
        notif.style.padding = padding;
    }else{
        notif.style.padding = defaultPadding;
    }
    //Position Ne pas décomenter
    /*if(setPosition){
        container.style.right = pos[0];
        container.style.bottom = pos[1];
        container.style.left = pos[2];
        container.style.top = pos[3];
    }else{
        container.style.right = defaultPos[0];
        container.style.bottom = defaultPos[1];
        container.style.left = defaultPos[2];
        container.style.top = defaultPos[3];
    }*/
    container.style.right = defaultPos[0];
    container.style.bottom = defaultPos[1];
    container.style.left = defaultPos[2];
    container.style.top = defaultPos[3];

    container.appendChild(notif);

    //La partie Timer & Animation
    if(timing == undefined){
        if(anim){
            notif.style.animation = animation[0]
            setTimeout(() => {
                notif.style.animation = animation[1]
            }, defaultTimer);
            setTimeout(() => {
                notif.remove();
            }, defaultTimer + 500);
        }else{
            notif.style.animation = defaultAnim[0]
            setTimeout(() => {
                notif.style.animation = defaultAnim[1]
            }, defaultTimer);
            setTimeout(() => {
                notif.remove();
            }, defaultTimer + 500);
        }
    }else{
        if(anim){
            notif.style.animation = animation[0]
            setTimeout(() => {
                notif.style.animation = animation[1]
            },timing);
            setTimeout(() => {
                notif.remove()
            },timing + 500);
        }else{
            notif.style.animation = defaultAnim[0]
            setTimeout(() => {
                notif.style.animation = defaultAnim[1]
            },timing);
            setTimeout(() => {
                notif.remove()
            },timing + 500);
        }
    }
}

window.addEventListener('message', (event) => {
	let data = event.data
	if(data.action == true){
		createNotification(data.message, data.timing, data.rgba, data.image, data.border, data.font, data.fontSize, data.padding/*, data.position*/, data.animation)
        //console.log(data.position)
	}
})