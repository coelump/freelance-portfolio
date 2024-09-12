const btnDarkMode = document.querySelector('.dark-mode-btn')

// 1. Проверка темной темы в системный настройках
if (window.matchMedia && window.matchMedia("(prefers-color-sceme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
}

// 2. Проверка темной темы в local storage

if (localStorage.getItem('darkMode') === "dark"){
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === "light") {
    btnDarkMode.classList.remove('dark-mode-btn--active')
    document.body.classList.remove('dark')
}

// Если меняются системные настройки то меняем тему
window
    .matchMedia("(prefers-color-sceme: dark)")
    .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark"){
            btnDarkMode.classList.add('dark-mode-btn--active')
            document.body.classList.add('dark')
            localStorage.setItem("darkMode", "dark");
        } else {
            btnDarkMode.classList.remove('dark-mode-btn--active')
            document.body.classList.remove('dark')
            localStorage.setItem("darkMode", "light");
        }
    })

// Вклбчение ночного режива по кнопке

btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle('dark-mode-btn--active')
    const isDark = document.body.classList.toggle('dark')

    if (isDark){
        localStorage.setItem("darkMode", "dark")
    } else {
        localStorage.setItem("darkMode", "light")
    }

}