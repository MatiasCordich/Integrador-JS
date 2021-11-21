const baseURL = 'https://back-sandbox.herokuapp.com/api'

const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const buttonSubmit = document.getElementById('btnSubmit')
const formLogin = document.querySelector('.login')
const cartelSucces = document.querySelector('.cartel-login-succes')
const cartelError = document.querySelector('.cartel-login-error')

const logIn = async () => {

    const body = {
        email: inputEmail.value,
        password: inputPassword.value
    }

    try {

        const res = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(body)
        })

        const json = await res.json()
        localStorage.setItem('token', json.token)

        if (json.token) {

            formLogin.style.display = 'none'
            cartelSucces.style.display = 'flex'
            cartelError.style.display = 'none'

            const h1 = document.createElement('h1')
            h1.innerText = 'Te has logueado con éxito'
            h1.style.fontSize = '3rem'
            h1.style.textAlign = 'center'

            const aNoticias = document.createElement('a')
            aNoticias.innerText = 'News'
            aNoticias.style.color = '#ef233c'
            aNoticias.style.fontSize = '2rem'
            aNoticias.style.fontWeight = '900'
            aNoticias.href= '../Noticias/noticias.html'

            const aHome = document.createElement('a')
            aHome.innerText = 'Home'
            aHome.style.color = '#ef233c'
            aHome.style.fontSize = '2rem'
            aHome.style.fontWeight = '900'
            aHome.href = '../index.html'

            const div = document.createElement('div')
            div.className = 'success-options'
            div.appendChild(aNoticias)
            div.appendChild(aHome)

            cartelSucces.appendChild(h1)
            cartelSucces.appendChild(div)

        } else {
            cartelError.style.display = 'flex'

            const msgError = document.createElement('h1')
            msgError.innerText = 'Email o contraseña inválidos'
            msgError.style.color = 'red'
            msgError.style.fontSize = '2.2rem'
            msgError.style.fontWeight = '400'
            msgError.style.letterSpacing = '.1rem'

            cartelError.appendChild(msgError)
        }
    } catch (error) {
        alert(`ERROR: ${error}`)
    }
}

buttonSubmit.addEventListener('click', logIn)