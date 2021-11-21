const box = document.getElementById('box')

const btnDelete = document.getElementById('btn-erase')

const inputSelect = document.getElementById('input-categoria')

const ApiKey = '464d1d8835b74a2491ca59d17c9e8585'

const baseURL = 'https://newsapi.org/v2/top-headlines?'

const getArgentinaNews = async () => {
    try {

        let inputCategoria = document.getElementById('input-categoria')

        let categoria = inputCategoria.value

        const res = await fetch(`${baseURL}category=${categoria}&country=ar&apiKey=${ApiKey}`)

        const json = await res.json()

        const articles = json.articles

        console.log(articles)

        renderNoticias(articles)

    } catch (error) {
        alert(`ERROR: ${error}`)
    }
}


const renderNoticias = (noticias) => {
    noticias.forEach( n => {

        let div = document.createElement('div')
        div.classList.add('noticia')
        div.classList.add('flex-center')
        div.classList.add('flex-columm')

        let h2 = document.createElement('h2')
        h2.innerText = n.title

        let img = document.createElement('img')
        img.classList.add('imagen')
        img.src = n.urlToImage

        let a = document.createElement('a')
        a.innerText = 'Ir a la noticia'
        a.href = n.url

        let p = document.createElement('p')
        p.innerText = n.description
        p.classList.add('noticias-description')

        div.appendChild(h2)
        div.appendChild(img)
        div.appendChild(a)
        div.appendChild(p)
        


        box.appendChild(div)

    }); 
}

const deleteResults = () => {
    box.innerHTML = ''
}

btnDelete.addEventListener('click', deleteResults)




