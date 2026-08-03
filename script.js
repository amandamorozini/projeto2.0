const botoes = document.qurySelectorAll ("button");

botoes.forEach (function (botao)) {
    let curtiu = false;
    botao.addEventlistener ("click", botaoClicado);
    function botaoClicado () {
        console.log ("fui clicado");
        let texto = botao.qurySelector ("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;     
        } else {
            texto.textContent--;
            curtiu= false;
        }
    }
}
