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

const botao = document.getElementById('iniciar')
botao.addEventListener('click', () => {
    conta();
    mGraph();
})

const resp = document.getElementById('resposta')

const mContas = document.getElementById('pContas')

//função das contas
function conta() {
    //dados da conta
    let varA = parseFloat(parA.value) || 0
    let varB = parseFloat(parB.value) || 0
    let varC = parseFloat(parC.value) || 0

    const delta = Math.pow(varB, 2) - 4 * varA * varC;

    const raiz1 = delta >= 0 ? (-varB + Math.sqrt(delta)) / (2 * varA) : null;
    const raiz2 = delta >= 0 ? (-varB - Math.sqrt(delta)) / (2 * varA) : null;

    let raiz = Math.sqrt(delta)
    let resultado = raiz % 1 === 0 ? Math.round(raiz) : parseFloat(raiz.toFixed(2));
    
    //checagem para mostrar contas
    if(mContas.checked) {
        //checagem do delta 1
        if(varA == 0 && varB == 0 && varC == 0) {
            resp.innerHTML = `Preencha os campos acima`
            graph.style.display = 'none';
            graphInfo.style.display = 'none';
            return
        } else if(varA == 0 && varB != 0 || varA == 0 && varC != 0 ) {
            resp.innerHTML = `Está não é uma equação do segundo grau`
            graph.style.display = 'none';
            graphInfo.style.display = 'none';
            return
        } else if(delta < 0) {
            resp.innerHTML = `
            &Delta; = b² - 4 &times; a &times; c <br>
            &rarr; &Delta; =  ${varB}² - 4 &times; ${varA} &times; ${varC} <br>
            &rarr; &Delta; = ${varB * varB} + ${-4 * varA * varC} <br>
            &therefore; <strong>&Delta; = ${delta}</strong> <br>
            Sendo assim, a fórmula mencionada não possui raízes reais, já que <strong>√${delta}</strong>. não pertence aos reais`
        } else if(delta == 0) {
            resp.innerHTML = `&Delta; = b² - 4 &times; a &times; c <br>
            &rarr; &Delta; =  ${varB}² - 4 &times; ${varA} &times; ${varC} <br>
            &rarr; &Delta; = ${varB * varB} + ${-4 * varA * varC} <br>
            &therefore; <strong>&Delta; = ${delta}</strong><br>
            Para descobrirmos então as raíes faremos:<br>
            <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">-b &plusmn; √&Delta;</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">2 &times; a</text>
            </svg><br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">-(${varB}) &plusmn; √${delta}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">2 &times; ${varA}</text>
            </svg><br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${-varB} &plusmn; ${resultado}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            <div class="caixa"><article>Onde para x1 temos:<br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${-varB} + ${resultado}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${-varB + resultado}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            portanto, temos que <strong>x1 = ${raiz1}</strong>
            </article>
            <article>Onde para x2 temos:<br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${-varB} - ${resultado}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${-varB - resultado}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            portanto, temos que <strong>x2 = ${raiz1}</strong>
            </article></div><br>
            Como ambos as raizes tem o valor <strong>${raiz1}</strong>, temos apenas uma raíz para este gráfico`
        } else if(delta > 0) {
            resp.innerHTML = `&Delta; = b² - 4 &times; a &times; c <br>
            &rarr; &Delta; =  ${varB}² - 4 &times; ${varA} &times; ${varC} <br>
            &rarr; &Delta; = ${varB * varB} + ${-4 * varA * varC} <br>
            &therefore; <strong>&Delta; = ${delta}</strong><br>
            Para descobrirmos então as raíes faremos:<br>
            <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">-b &plusmn; √&Delta;</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">2 &times; a</text>
            </svg><br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">-(${varB}) &plusmn; √${delta}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">2 &times; ${varA}</text>
            </svg><br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${-varB} &plusmn; ${resultado}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            <div class="caixa"><article>
            Onde para x1 temos:<br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${-varB} + ${resultado}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${parseFloat((-varB + resultado).toFixed(2))}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            portanto, temos que <strong>x1 = ${raiz1}</strong>
            </article>
            <article>
            Onde para x2 temos:<br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${-varB} - ${resultado}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            <span>&rarr;</span> <svg width="70" height="47">
            <text x="30" y="20" font-size="12" text-anchor="middle">${parseFloat((-varB - resultado).toFixed(2))}</text>
            <line x1="0" y1="25" x2="60" y2="25" stroke="black"/>
            <text x="30" y="40" font-size="12" text-anchor="middle">${2 * varA}</text>
            </svg><br>
            portanto, temos que <strong>x2 = ${raiz2}</strong>
            </article></div><br>
            Portanto temos <strong>x1=${raiz1}</strong>, e <strong>x2=${raiz2}<strong>`
        }
    } else {
        //checagem do delta 2
        if(varA == 0 && varB == 0 && varC == 0) {
            resp.innerHTML = `Preencha os campos acima`
            graph.style.display = 'none';
            graphInfo.style.display = 'none';
            return
        } else if(varA === 0 && varB != 0 || varA === 0 && varC != 0 ) {
            resp.innerHTML = `Está não é uma equação do segundo grau`
            graph.style.display = 'none';
            graphInfo.style.display = 'none';
            return
        } else if(delta < 0) {
            resp.innerHTML = `O valor calculado para o <strong>&Delta; = ${delta}</strong>, o que indica que não há raízes reais.`
        } else if(delta == 0) {
           resp.innerHTML = `Seu <strong>&Delta; = ${delta}</strong>, o que significa que existe apenas uma raiz, que é <strong>x = ${raiz1}</strong>.`
        } else if(delta > 0) {
            resp.innerHTML = `Já que o valor de <strong>&Delta; = ${delta}</strong>, sendo assim temos as raízes <strong>x1 = ${raiz1}</strong> e <strong>x2 = ${raiz2}</strong>`
        }
    }
}

//função do gráfico
function mGraph() {
    //parametros
    let varA = parseFloat(parA.value) || 0
    let varB = parseFloat(parB.value) || 0
    let varC = parseFloat(parC.value) || 0

    // pontos principais
    const xm = -varB / (2 * varA);
    const ym = varA * Math.pow(xm, 2) + varB * xm + varC;
    const delta = Math.pow(varB, 2) - 4 * varA * varC;
    const raiz1 = delta >= 0 ? (-varB + Math.sqrt(delta)) / (2 * varA) : null;
    const raiz2 = delta >= 0 ? (-varB - Math.sqrt(delta)) / (2 * varA) : null;

    if(varA === 0) return

    // pontos do gráfico
    const x = Array.from({ length: 101 }, (_, i) => xm - 10 + (i * 0.2)); // deixa o x no meio
    const y = x.map(xi => varA * Math.pow(xi, 2) + varB * xi + varC);

    // dados
    const trace = {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'lines',
        name: 'Parábola',
    };

    const pontos = [
        {
            x: [xm],
            y: [ym],
            mode: 'markers+text',
            name: 'Vértice',
            text: ['Vértice'],
            textposition: 'top center',
        },
        raiz1 !== null && raiz2 !== null
            ? {
                x: [raiz1, raiz2],
                y: [0, 0],
                mode: 'markers+text',
                name: 'Raízes',
                text: ['Raiz 1', 'Raiz 2'],
                textposition: 'bottom center',
            }
            : null,
    ].filter(Boolean);

    const layout = {
        title: 'Gráfico da função',
        xaxis: { title: 'x' },
        yaxis: { title: 'y' },
        showlegend: true,
    };

    // mostrar o gráfico
    Plotly.newPlot('graph', [trace, ...pontos], layout);

    // Tornar o gráfico visível
    graph.style.display = 'block';
    graphInfo.style.display = 'inline';
}