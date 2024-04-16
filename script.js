window.onload = () => {
    function buildClock() {
        const date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        document.querySelector('#c-hour').innerText = hours;
        document.querySelector('#c-minute').innerText = minutes;
        document.querySelector('#c-second').innerText = seconds;

        setTimeout(buildClock,1000)
    }
    buildClock()

}