function startTimer() {
    let time = 5 * 60; // 5 minutos em segundos
    const timerElement = document.getElementById("timer");

    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(interval);
            alert("O tempo acabou!");
        }

        time--;
    }, 1000);
}