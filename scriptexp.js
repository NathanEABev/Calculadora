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
    let varD = parseFloat(parD.value) || 0

    const pontoY = varA ** (0 - varC) * varB + varD

    if(varA === 0 && varB === 0 && varC === 0 && varD === 0) { 
        resp.innerHTML = "Preencha os campos acima"
        return
    } else if(varA === 0) {
        resp.innerHTML = `Não é uma função exponencial`
        return
    }

    if(mContas.checked) {
        resp.innerHTML = `Marcou pq?`
    } else { 
        if(varC === 0 && varD === 0) {
            resp.innerHTML = `A equação da função é <strong>y = ${varA}<sup>x</sup> &times; ${varB}</strong> <br>
            O ponto de corte com o eixo y (x = 0) é: <strong>${pontoY}</strong>`
        } else if(varC === 0) {
            resp.innerHTML = `A equação da função é <strong>y = ${varA}<sup>x</sup> &times; ${varB} + ${varD}</strong> <br>
            O ponto de corte com o eixo y (x = 0) é: <strong>${pontoY}</strong>`
        } else if(varD === 0) {
            resp.innerHTML = `A equação da função é <strong>y = ${varA}<sup>x - ${varC}</sup> &times; ${varB}</strong> <br>
            O ponto de corte com o eixo y (x = 0) é: <strong>${pontoY}</strong>`
        } else {
            resp.innerHTML = `A equação da função é <strong>y = ${varA}<sup>x - ${varC}</sup> &times; ${varB} + ${varD}</strong> <br>
            O ponto de corte com o eixo y (x = 0) é: <strong>${pontoY}</strong>`
        }
    }
}