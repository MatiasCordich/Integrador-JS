const baseURL = 'https://back-sandbox.herokuapp.com/api';

const inputName = document.getElementById('inputName')
const inputLastName = document.getElementById('inputLastName')
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const buttonSubmit = document.getElementById('btnSubmit')
const cartelSucces = document.querySelector('.cartel')
const formulario = document.querySelector('.formulario')
const errorCartel = document.querySelector('.error-cartel')


const register = async () => {
    const body = {
        name: inputName.value,
        lastName: inputLastName.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    try {
        const res = await fetch(`${baseURL}/auth/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })

        const json = await res.json()
        console.log(json)

        if(res.status === 201) {

            formulario.style.display = 'none'

            errorCartel.style.display = 'none'

            cartelSucces.style.display = 'flex'

            const h1 = document.createElement('h1')
            h1.innerText = 'Te has registrado con éxito!'
            h1.style.fontSize = '2.5rem'
            h1.style.color = '#ef233c'

            const p = document.createElement('p')
            p.innerText = 'Ahora puedes seguir informado las 24hs del dia'
            p.style.fontWeight = '700'

            const divBtn = document.createElement('div')
            divBtn.className = 'btn-redirect flex-center'
            divBtn.style.gap = '2rem'

            const aHome = document.createElement('a')
            aHome.innerText = 'Home'
            aHome.href = '../index.html'
            aHome.style.color = '#2b2d42'
            aHome.style.fontWeight = '700'
            aHome.style.letterSpacing = '.2rem'

            const aLogin = document.createElement('a')
            aLogin.innerText = 'Login'
            aLogin.href = '../Login/login.html'
            aLogin.style.color = '#2b2d42'
            aLogin.style.fontWeight = '700'
            aLogin.style.letterSpacing = '.2rem'
            

            divBtn.appendChild(aHome)
            divBtn.appendChild(aLogin)

            cartelSucces.appendChild(h1)
            cartelSucces.appendChild(p)
            cartelSucces.appendChild(divBtn)
        } else {

            errorCartel.style.display = 'flex'

            const errorMsg = document.createElement('h1')

            errorMsg.innerText = 'La contraseña o el email ya estan registrados, intentelo otra vez'
            errorMsg.style.color = 'red'

            errorCartel.appendChild(errorMsg)
        }
    } catch (error) {
        alert(`ERROR: ${error}`)
    }
}

buttonSubmit.addEventListener('click', register)