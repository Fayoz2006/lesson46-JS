let password_eye = document.querySelectorAll(`.eye-off`)
let input_eye = document.querySelectorAll(`.eye`)

password_eye.forEach(item => {
    item.onclick = () => {
        if (item.getAttribute(`src`) == `icons/eye-off.svg`) {
            item.setAttribute(`src`, `icons/eye.svg`)
            input_eye.forEach(element => {
                element.setAttribute(`type`, `text`)
            })
        } else if (item.getAttribute(`src`) == `icons/eye.svg`) {
            item.setAttribute(`src`, `icons/eye-off.svg`)
            input_eye.forEach(element => {
                element.setAttribute(`type`, `password`)
            })
        }
    }
})

// Translation
let languages = document.querySelector(`select`)
let form = document.forms.registration
let inputs = form.querySelectorAll(`input`)
let h3 = document.querySelector(`h3`)
let p = document.querySelectorAll(`p`)
let span = document.querySelector(`span`)
let send_btn = document.querySelector(`button`)

languages.onchange = () => {
    if (languages.value == `Russian`) {
        h3.innerHTML = `Заполните бланку`
        p[0].innerHTML = `Персональные данные`
        p[1].innerHTML = `Конфиденциально`
        span.innerHTML = `Дата рождения`
        inputs[0].setAttribute(`placeholder`, `Имя`)
        inputs[1].setAttribute(`placeholder`, `Фамилия`)
        inputs[3].setAttribute(`placeholder`, `например@gmail.com`)
        inputs[4].setAttribute(`placeholder`, `Пароль`)
        inputs[5].setAttribute(`placeholder`, `Повторно введите пароль`)
        inputs[6].setAttribute(`value`, `Тел: (+7)`)
        inputs[7].setAttribute(`placeholder`, `Номер телефона`)
        send_btn.innerHTML = `Отправить`
    } else if (languages.value == `Uzbek`) {
        h3.innerHTML = `Shaklni to'ldiring`
        p[0].innerHTML = `Shaxsiy ma'lumotlar`
        p[1].innerHTML = `Maxfiylik`
        span.innerHTML = `Tug'ilgan kun`
        inputs[0].setAttribute(`placeholder`, `Ism`)
        inputs[1].setAttribute(`placeholder`, `Familiya`)
        inputs[3].setAttribute(`placeholder`, `misoluchun@gmail.com`)
        inputs[4].setAttribute(`placeholder`, `Parol`)
        inputs[5].setAttribute(`placeholder`, `Parolni qayta kiriting`)
        inputs[6].setAttribute(`value`, `tel: (+998)`)
        inputs[7].setAttribute(`placeholder`, `Telefon raqami`)
        send_btn.innerHTML = `Yuborish`
    } else if (languages.value == `English`) {
        h3.innerHTML = `Fill out the form`
        p[0].innerHTML = `Personal Data`
        p[1].innerHTML = `Privacy`
        span.innerHTML = `Date of your birthday`
        inputs[0].setAttribute(`placeholder`, `Name`)
        inputs[1].setAttribute(`placeholder`, `Surname`)
        inputs[3].setAttribute(`placeholder`, `example@gmail.com`)
        inputs[4].setAttribute(`placeholder`, `password`)
        inputs[5].setAttribute(`placeholder`, `repeat your password`)
        inputs[6].setAttribute(`value`, `tel: (+1)`)
        inputs[7].setAttribute(`placeholder`, `telephone number`)
        send_btn.innerHTML = `Send`
    }
}

let password_lenght = document.querySelectorAll(`.password-eye`)

inputs[4].onblur = () => {
    if (inputs[4].value.length >= 8) {
        password_lenght[0].style.border = `1px solid green`
        inputs[5].onblur = () => {
            if (inputs[4].value == inputs[5].value && inputs[4].value.length == inputs[5].value.length) {
                password_lenght[0].style.border = `1px solid green`
                password_lenght[1].style.border = `1px solid green`
            } else {
                alert(`Your passwords are not the same! Please check it on more time`)
            }
        }
    }
    else password_lenght[0].style.border = `1px solid red`
}