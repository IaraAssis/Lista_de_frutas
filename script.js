// Criar  body 
// criar artigo  
// um img para a imagem 
//criar um titulo h1
// criar 4 divs
// criar 4 p dentro da div 

const body = document.querySelector('body');

const artigo = document.createElement('article');
body.appendChild(artigo);

const img = document.createElement("img");
img.src = './cesta-de-frutas.png'
img.className = 'div_imagem' 
artigo.appendChild(img)

const titulo = document.createElement("h3");
titulo.innerText = "VidaFruta"
titulo.className='div_titulo'
artigo.appendChild(titulo)


const divs = document.createElement('div')
artigo.appendChild(divs)

const p1 = document.createElement('p')
p1.innerText = "Banana"
p1.className='paragrafo'
divs.appendChild(p1)

const p2 = document.createElement('p')
p2.innerText = "Morango"
p2.className='paragrafo'
divs.appendChild(p2)

const p3 = document.createElement('p')
p3.innerText = "Abacaxi"
p3.className='paragrafo'
divs.appendChild(p3)

const p4 = document.createElement('p')
p4.innerText = "Uva"
p4.className='paragrafo'
divs.appendChild(p4)



