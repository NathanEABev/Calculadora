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
        graph.style.display = 'none';
        graphInfo.style.display = 'none';
        return
    } else if(varA === 0 || varA < 0) {
        resp.innerHTML = `Não é uma função exponencial`
        graph.style.display = 'none';
        graphInfo.style.display = 'none';
        return
    }

    if(mContas.checked) {
        if(varC === 0 && varD === 0) {
            resp.innerHTML = `A equação da função é <strong>y = ${varA}<sup>x</sup> &times; ${varB}</strong> <br>
            O ponto de corte com o eixo y (x = 0) é: <strong>${pontoY}</strong> <br>
            Já que: f(0) = b &times; a<sup>x</sup><br>
            &rarr; ${varB} &times; ${varA}<sup>0</sup><br>
            &rarr; ${varB} &times; 1<br>
            &rarr; ${varB}`
        } else if(varC === 0) {
            resp.innerHTML = `A equação da função é <strong>y = ${varA}<sup>x</sup> &times; ${varB} + ${varD}</strong> <br>
            O ponto de corte com o eixo y (x = 0) é: <strong>${pontoY}</strong> <br>
            Já que: f(0) = b &times; a<sup>x</sup> + d<br>
            &rarr; ${varB} &times; ${varA}<sup>0</sup> + ${varD}<br>
            &rarr; ${varB} &times; 1 + ${varD}<br>
            &rarr; ${varB} + ${varD}<br>
            &rarr; ${varB + varD}`
        } else if(varD === 0) {
            resp.innerHTML = `A equação da função é <strong>y = ${varA}<sup>x - ${varC}</sup> &times; ${varB}</strong> <br>
            O ponto de corte com o eixo y (x = 0) é: <strong>${pontoY}</strong> <br>
            Já que: f(0) = b &times; a<sup>x - c</sup><br>
            &rarr; ${varB} &times; ${varA}<sup>0 - ${varC}</sup><br>
            &rarr; ${varB} &times; ${varA}<sup>${-varC}</sup><br>
            &rarr; ${varB} &times; ${varA ** -varC}<br>
            &rarr; ${varB * varA ** -varC}`
        } else {
            resp.innerHTML = `A equação da função é <strong>y = ${varA}<sup>x - ${varC}</sup> &times; ${varB} + ${varD}</strong> <br>
            O ponto de corte com o eixo y (x = 0) é: <strong>${pontoY}</strong> <br>
            Já que: f(0) = b &times; a<sup>x - c</sup> + d<br>
            &rarr; ${varB} &times; ${varA}<sup>0 - ${varC}</sup> + ${varD}<br>
            &rarr; ${varB} &times; ${varA}<sup>${-varC}</sup> + ${varD}<br>
            &rarr; ${varB} &times; ${varA ** -varC} + ${varD}<br>
            &rarr; ${varB * varA ** - varC} + ${varD}<br>
            &rarr; ${pontoY}`
        }
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

function mGraph() {
    let varA = parseFloat(parA.value) || 0
    let varB = parseFloat(parB.value) || 0
    let varC = parseFloat(parC.value) || 0
    let varD = parseFloat(parD.value) || 0

    const pontoY = varA ** (0 - varC) * varB + varD

    if(varA === 0 || varA < 0) {
        graph.style.display = 'none';
        graphInfo.style.display = 'none';
        return
    }

    const xm = 0;
    const ym = pontoY;

    const x = Array.from({ length: 21 }, (_, i) => i - 10);
    const y = x.map(xi => varA ** (xi - varC) * varB + varD);

    const trace = {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'lines',
        name: 'Função exponencial',
    };

    const pontos = [
        {
            x: [xm],
            y: [ym],
            mode: 'markers+text',
            name: 'Ponto de Corte com o Eixo Y',
            text: [`Ponto (0, ${pontoY})`],
            textposition: 'top center',
        },
    ];

    const layout = {
        title: 'Gráfico da Função exponencial',
        xaxis: { title: 'x' },
        yaxis: { title: 'y' },
        showlegend: true,
    };

    Plotly.newPlot('graph', [trace, ...pontos], layout);

    graph.style.display = 'block';
    graphInfo.style.display = 'inline';
}