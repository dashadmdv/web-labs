document.addEventListener('DOMContentLoaded', function() {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const textColorPicker = document.getElementById('text-color-picker');

    const root = document.documentElement;

    // Проверяем наличие сохраненных настроек в sessionStorage
    if (sessionStorage.getItem('fontSize')) {
        root.style.fontSize = sessionStorage.getItem('fontSize');
    }

    if (sessionStorage.getItem('textColor')) {
        root.style.color = sessionStorage.getItem('textColor');
        textColorPicker.value = sessionStorage.getItem('textColor');
    }

    increaseFontButton.addEventListener('click', function() {
        const currentFontSize = window.getComputedStyle(root).getPropertyValue('font-size');
        const newSize = (parseInt(currentFontSize) + 1) + 'px'; // Увеличиваем на 1px
        root.style.fontSize = newSize;

        // Сохраняем новый размер шрифта в sessionStorage
        sessionStorage.setItem('fontSize', newSize);
    });

    decreaseFontButton.addEventListener('click', function() {
        const currentFontSize = window.getComputedStyle(root).getPropertyValue('font-size');
        const newSize = (parseInt(currentFontSize) - 1) + 'px'; // Уменьшаем на 1px
        root.style.fontSize = newSize;

        // Сохраняем новый размер шрифта в sessionStorage
        sessionStorage.setItem('fontSize', newSize);
    });

    textColorPicker.addEventListener('input', function() {
        const selectedColor = textColorPicker.value;
        root.style.color = selectedColor;

        // Сохраняем новый цвет текста в sessionStorage
        sessionStorage.setItem('textColor', selectedColor);
    });
});
