const container = document.getElementById("container");

createNotification = function(txt, time) {

    let timing = time
    let message = txt
    const notif = document.createElement("div");
    notif.classList.add("toast");

    if(message == undefined){
        notif.innerHTML = '<img src="logo.png"><h4>Voci ma notif !</h4>';
    }else{
        notif.innerHTML = '<img src="logo.png"><h4>' + txt + '</h4>';
    }
    //notif.innerHTML = '<img src="logo.png"><h4>Voci ma notif !</h4>';

    container.appendChild(notif);

    if(timing == undefined){
        setTimeout(() => {
            notif.classList.add("remove-notif");
        }, 7000);
        setTimeout(() => {
            notif.remove();
        }, 7500);
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
		createNotification(data.message, data.timing)
	}
})
