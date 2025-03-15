function updateClock() {
    const clock = document.getElementById('clock');

    // get the current time
    const now = new Date();


    // extracting hours, minutes , seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    //adding leading zeros for single digit hrs, min and sec
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    //format time string 
    const timeString = `${hours}:${minutes}:${seconds}`;

    clock.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();