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

let lastScrollTop = 0; // Mantém o último valor do scroll

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll para baixo: esconde o header
        header.classList.add('hidden');
    } else {
        // Scroll para cima: mostra o header
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});

//dados gerais
const parA = document.getElementById('dado-a');
const parB = document.getElementById('dado-b');

const botao = document.getElementById('iniciar');
botao.addEventListener('click', () => {
    conta();
    mGraph();
});

const resp = document.getElementById('resposta');
const mContas = document.getElementById('pContas');

//função das contas
function conta() {
    //dados da conta
    let varA = parseFloat(parA.value) || 0;
    let varB = parseFloat(parB.value) || 0;

    // Verificar se é uma função afim válida (a ≠ 0)
    if (varA === 0) {
        resp.innerHTML = "Essa não é uma função afim, pois o coeficiente 'a' não pode ser zero.";
        return;
    }

    // Calculando o ponto de corte com o eixo y (quando x = 0, y = b)
    const pontoY = varB;

    // Calculando o ponto de corte com o eixo x (quando y = 0, x = -b/a)
    const pontoX = -varB / varA;

    // Exibindo as contas
    if (mContas.checked) {
        resp.innerHTML = `
            A equação da função afim é: <strong>y = ${varA}x + ${varB}</strong><br>
            <div class="caixa">
            <article>O ponto de corte com o eixo y (quando x = 0) é: <strong>y = ${pontoY}</strong>,<br>
             ja que ${varA} &times; 0 + ${varB} = ${pontoY}</article><br>
            <article>O ponto de corte com o eixo x (quando y = 0) é: <strong>x = ${pontoX}</strong><br>
            já que ${varA} &times; x + ${varB} = 0 &rarr; ${varA} &times; x = ${-varB}<br>
            &rarr;  x = ${-varB} &divide; ${varA} &rarr; x = ${pontoX}</article><div>
        `;
    } else {
        resp.innerHTML = `
            A equação da função afim é: <strong>y = ${varA}x + ${varB}</strong><br>
            O ponto de corte com o eixo y é: <strong>y = ${pontoY}</strong><br>
            O ponto de corte com o eixo x é: <strong>x = ${pontoX}</strong><br>
        `;
    }
}

//função do gráfico
function mGraph() {
    //parametros
    let varA = parseFloat(parA.value) || 0;
    let varB = parseFloat(parB.value) || 0;

    // Verificar se é uma função afim válida (a ≠ 0)
    if (varA === 0) return;

    // pontos principais
    const xm = 0; // O valor de x no ponto de corte com o eixo y
    const ym = varB; // O valor de y no ponto de corte com o eixo y

    // Ponto de corte com o eixo x
    const pontoX = -varB / varA;

    // Gerar os pontos do gráfico (valores de x e y)
    const x = Array.from({ length: 101 }, (_, i) => i - 50); // Gera valores de x entre -50 e 50
    const y = x.map(xi => varA * xi + varB); // Equação da reta: y = ax + b

    // Dados para o gráfico
    const trace = {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'lines',
        name: 'Função Afim',
    };

    // Pontos importantes: ponto de corte com o eixo y e ponto de corte com o eixo x
    const pontos = [
        {
            x: [xm],
            y: [ym],
            mode: 'markers+text',
            name: 'Ponto de Corte com o Eixo Y',
            text: ['Ponto (0, b)'],
            textposition: 'top center',
        },
        {
            x: [pontoX],
            y: [0],
            mode: 'markers+text',
            name: 'Ponto de Corte com o Eixo X',
            text: ['Ponto (-b/a, 0)'],
            textposition: 'bottom center',
        },
    ];

    const layout = {
        title: 'Gráfico da Função Afim',
        xaxis: { title: 'x' },
        yaxis: { title: 'y' },
        showlegend: true,
    };

    // Mostrar o gráfico
    Plotly.newPlot('graph', [trace, ...pontos], layout);

    // Tornar o gráfico visível
    graph.style.display = 'block';
    graphInfo.style.display = 'inline';
}