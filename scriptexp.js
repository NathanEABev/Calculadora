const menuToggle = document.getElementById('menuitem');
const menu = document.getElementById('menu-escondido');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.style.backgroundColor = menu.classList.contains('show') ? 'rgba(0, 0, 0, 0.3)' : 'white';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.backgroundColor = 'white';
});

//dados gerais
const parA = document.getElementById('dado-a')
const parB = document.getElementById('dado-b')
const parC = document.getElementById('dado-c')
const parD = document.getElementById('dado-d')

const botao = document.getElementById('iniciar')
botao.addEventListener('click', () => {
    conta();
    mGraph();
})

const resp = document.getElementById('resposta')

const mContas = document.getElementById('pContas')

function conta() {
    let varA = parseFloat(parA.value) || 0
    let varB = parseFloat(parB.value) || 0
    let varC = parseFloat(parC.value) || 0
    let varD = parseFloat(pard.value) || 0

    if(varA === 0 && varB === 0 && varC === 0 && varD === 0) { 
        resp.innerHTML = "Preencha os campos acima"
    } else if(varA === 0 || varB === 0) {
        resp.innerHTML = `Isso não é uma função exponencial`
    }

    if(mContas.checked) {

    } else { 
        
    }
}