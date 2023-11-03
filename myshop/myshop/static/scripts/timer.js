function startCountdown(hours) {
    const countdownElement = document.getElementById('countdown');
    let seconds = hours * 60 * 60;

    function updateCountdown() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        countdownElement.innerHTML = `${minutes} min ${remainingSeconds} sec`;

        if (seconds > 0) {
            seconds--;
            // Сохраняем оставшееся время в localStorage
            localStorage.setItem('countdownSeconds', seconds);
        } else {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Time is over";
        }
    }

    let countdownInterval;

    // Проверяем, есть ли сохраненные данные в localStorage
    if (localStorage.getItem('countdownSeconds')) {
        seconds = parseInt(localStorage.getItem('countdownSeconds'));
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    } else {
        // обратный отсчет, если данных в localStorage нет
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }
}

// обратный отсчет на 1 час
startCountdown(1);