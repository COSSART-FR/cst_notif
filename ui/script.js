const container = document.getElementById("container");

createNotification = function(txt, time) {

    let timing = time
    let message = txt
    const notif = document.createElement("div");
    notif.classList.add("notification");

    const bar = document.createElement("div");
    bar.classList.add("loadBar");
    bar.setAttribute('id', 'loadBar');

    if(message == undefined){
        notif.innerHTML = '<img src="logo.png"><h4>Voci ma notif !</h4>';
    }else{
        notif.innerHTML = '<img src="logo.png"><h4>' + txt + '</h4>';
    }
    //notif.innerHTML = '<img src="logo.png"><h4>Voci ma notif !</h4>';

    container.appendChild(notif);
    container.appendChild(bar);

    if(timing == undefined){
        setTimeout(() => {
            notif.classList.add("remove-notif");
            bar.classList.add("remove-notif");
            move(7000);
        }, 7000);
        setTimeout(() => {
            notif.remove();
            bar.remove();
            move(7500);
        }, 7500);
    }else{
        setTimeout(() => {
            notif.classList.add("remove-notif");
            bar.classList.add("remove-notif");
            move(timing);
        }, timing);
        setTimeout(() => {
            notif.remove();
            bar.remove();
            move(timing + 500);
        }, timing + 500);
    }
}

window.addEventListener('message', (event) => {
	let data = event.data
	if(data.action == true){
		createNotification(data.message, data.timing)
	}
})



// LOAD BAR
var i = 0;
function move(timing) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadBar");
    var width = 1;
    var id = setInterval(frame, timing);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}