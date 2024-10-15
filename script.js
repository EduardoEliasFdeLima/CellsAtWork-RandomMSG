const frs = [
    '"Se seu dia estiver ruim, lembre-se que todo dia é aniversário de alguém."', 
    '"Viva todo dia como se fosse o último, algum dia você acerta!"',
    '"Quando eu tiver um mano, ele vai se chamar Herrar. Porque Herrar é o mano!"',
    '"Não derrube um lápis no chão, ele pode ficar desapontado :("',
    '"Por que tudo junto é separado e separado é tudo junto?"',
    '"Nunca desista dos seus sonhos. Se não encontrar numa padaria, procure na próxima."',
    '"Algumas pessoas são iguais nuvens, a gente olha e vê um animal."',
    '"A vida nunca vai te derrubar se você não se levantar"',
    '"Cansado de estar cansado porque estar cansado é cansativo."',
    '"Se a vida fosse fácil bebê não nascia chorando."',
    '"O ruim não é o trabalho, o ruim é ter que ir trabalhar"',
    '"Quem disse que educação não enriquece? é só olhar para as escolas particulares"',
    '"Se tentarem te vender óculos sem lentes, não compre! É armação."',
    '"O casamento é a razão de qualquer divórcio"',
    '"Os primeiros 7 dias da semana são sempre os mais difíceis"',
    '"Odeio gente que não termina a frase, parece que..."',
    '"Se o trabalho duro dá frutos, então deixem as árvores trabalharem"',
    '"Atualmente os psiquiatras têm cobrado preços de doidos"',
    '"Já percebeu que todo mundo faz aniversário no mesmo ano?"',
    '"Já pensou se chovesse macarrão? Seria massa"',
    '"Não leve a vida tão a sério, você não vai sair vivo dela"',
    '"Por que a calça a gente bota e a bota a gente calça?"',
    '"Tudo na vida passa, até uva passa"',
    '"É raro, mas acontece muito"',
    '"Não empilhe livros à toa, eles podem se sentir pressionados."',
    '"Não ignore o despertador, ele só quer te ajudar a levantar."',
    '"Cuidado ao quebrar um relógio, ele pode perder a hora."',
    '"Cuidado com o ventilador, ele pode acabar virando as costas para você."',
    '"O veneno quando passa da validade, perde o efeito ou fica mais forte?"',
    '"Um bom mentiroso é aquele que acredita na própria mentira"',
    '"Eu não mando indireta, igual certas pessoas por aí.."',
    '"Namoro é coisa séria, mas como sou engraçado estou solteiro"'
]

//muda a imagem com a url mandada pra função
function change_image(url_imagem){
    var img = document.querySelector('img');
    return img.src = `${url_imagem}`;
}


function Mensagem(){
    change_image('./imgs/PlaquetaFalando.png');
    //chama a função pra trocar a imagem e poe a foto da plaquetalendo
   
    //Muda a mensagem do topo 
    Change_texts("mensagem");
    
    //Mostra a caixa de frases
    Mostrar_caixaFrases();
   
    //gera um número aleatório conforme a quantidade de frases na constante frs, passa pra inteiro e insere a frase como conteúdo
    var N = (Math.random() * (frs.length));
    var N2 = parseInt(N);

    var ct = document.getElementById('content');
    ct.innerHTML = frs[N2];

    Change_BackgroundColor('#ECCB79');
    //chama a função pra trocar de fundo e manda a bege
    
    elements.ButtonSimNao().style.visibility = "visible";
    elements.Btn_sim().style.visibility = "visible";
    elements.Btn_nao().style.visibility = "visible";

    toogleAnimacao_ButtonMsg(false);

    //remove as animações dos icones positivos e negativos
    animacao_icones_negativos(false);
    animacao_icones_positivos(false);


    // remove a animação de bounce na imagem dela brava
    toggleAnimation_brava(false);
}

 //Botão não
function MensagemNegativa(){
   
    //chama a função pra trocar a imagem e poe a foto da plaquetatriste
    change_image('./imgs/PlaquetaTriste.png');
   
    //Mostra a caixa de sim ou nao
    elements.ButtonSimNao().style.visibility = "visible";
    //remove apenas o botao sim
    elements.Btn_sim().style.visibility = "hidden";

     //Muda a mensagem do topo, da frase e da pergunta de forma negativa
    Change_texts('negativo');

    //chama a função pra trocar de fundo e manda a cor cinza
    Change_BackgroundColor('#585858');
   
    //Adiciona a animação do botao de mensagem
    toogleAnimacao_ButtonMsg(true);

    //remove a animação de bounce na imagem dela brava
    toggleAnimation_brava(false);


    //adiciona a animação nos icones negativos
    animacao_icones_negativos(true);

}


//click na foto
function MensagemBrava(){
     //chama a função pra trocar a imagem e poe a foto da plaquetaBrava
    change_image('./imgs/PlaquetaBrava.png');
   
    
    elements.ButtonSimNao().style.visibility = "hidden";
    elements.Btn_nao().style.visibility = "hidden";
    elements.Btn_sim().style.visibility = "hidden";
   
    //Muda a mensagem do topo e da frase de forma brava
    Change_texts('brava');

    //chama a função pra trocar a cor do fundo e manda a cor vermelha
    Change_BackgroundColor('#e44951');

    //adiciona a animação de bounce na imagem dela brava
    toggleAnimation_brava(true);

    //mostra a caixa de frase
    Mostrar_caixaFrases();
}


 //Botão simm
function MensagemPositiva(){
   
    //chama a função pra trocar a imagem e poe a foto da plaquetaFeliz 
    change_image('./imgs/PlaquetaFeliz.png');
  
    //tira apenas o botão não da tela
    elements.Btn_nao().style.visibility = "hidden";

    //Muda as mensagens da tela de forma positiva 
    Change_texts("positivo");

    //chama a função pra trocar de fundo e manda a cor verde
    Change_BackgroundColor('#62d685');
    
    // elements.Button_Message().style.animation = "balan 1s infinite ease-in 10s"
    toogleAnimacao_ButtonMsg(true);

    //adiciona a animação nos icones positivos
    animacao_icones_positivos(true);

    //remove a animação de bounce na imagem dela brava
    toggleAnimation_brava(false);

    
}


function animacao_icones_negativos(negative_state){
    if(negative_state){
        negativeIcons.icon_negative1().style.animation = "fisrtStar 2s 1 ease-out ";
        negativeIcons.icon_negative2().style.animation = "SecondStar 2s 1 ease-out .3s";
        negativeIcons.icon_negative3().style.animation = "ThirdStar 2s 1 ease-out .2s";
    }else{
        negativeIcons.icon_negative1().style.animation = "none";
        negativeIcons.icon_negative2().style.animation = "none";
        negativeIcons.icon_negative3().style.animation = "none";
    }
}


function animacao_icones_positivos(positive_state){
    if(positive_state){
        positiveIcons.icon_positive1().style.animation = "fisrtStar 2s 1 ease-out ";
        positiveIcons.icon_positive2().style.animation = "SecondStar 2s 1 ease-out .3s";
        positiveIcons.icon_positive3().style.animation = "ThirdStar 2s 1 ease-out .2s";
    }else{
        positiveIcons.icon_positive1().style.animation = "none";
        positiveIcons.icon_positive2().style.animation = "none";
        positiveIcons.icon_positive3().style.animation = "none";
    }
}



//Mostra o modal do Guia
function Ajuda(){
    elements.modal_guia().style.visibility = "visible";
    elements.modal_guia().style.marginTop = "650px";
    elements.modal_guia().style.position = "absolute";
    elements.Button_Message().style.display = "none";
}

//Fecha o modal do GUia
function fechar(){
  
    elements.modal_guia().style.transition ="ease-out 2s";
    elements.modal_guia().style.marginTop = "-500px";
    elements.Button_Message().style.display = "flex";
    
}

//constante com todos os elementos de butãa e guia
const elements = {
    ButtonSimNao: () => document.getElementById('SimNao'),
    Button_Message: () => document.getElementById('Btn_Message'),
    Btn_sim: () => document.getElementById('Btn_sim'),
    Btn_nao: () => document.getElementById('Btn_nao'),
    modal_guia: () => document.getElementById('guia') 

}

//constante com todos os icones positivos
const negativeIcons = {
    icon_negative1: () => document.getElementById('bomb1'),
    icon_negative2: () => document.getElementById('bomb2'),
    icon_negative3: () => document.getElementById('bomb3')
}

//constante com todos os icones negativos
const positiveIcons = {
    icon_positive1: () => document.getElementById('star1'),
    icon_positive2: () => document.getElementById('star2'),
    icon_positive3: () => document.getElementById('star3')
}

//Remove ou poe a animação do botão de messagem balançando
function toogleAnimacao_ButtonMsg(valor){
    return valor ? elements.Button_Message().style.animation = "balan 1s infinite ease-in 10s" : elements.Button_Message().style.animation = "none";
}

//Função para trocar a cor do fundo 
function Change_BackgroundColor(valor_hexadecimal){
    return document.body.style.background = `${valor_hexadecimal}`;
}
 
//Mostra a caixa de frases 
function Mostrar_caixaFrases(){
    var cont = document.getElementById('content');
    cont.style.position = "absolute";
    cont.style.bottom = "50%";
}

//Adiciona ou tira a animação de braveza
function toggleAnimation_brava(valor_brava){
     var boun = document.getElementById('boun');
     return valor_brava ? boun.style.animation = "bounce .4s" : boun.style.animation = "none";
}

//Muda todos os valores de textos. do fundo, da frase e da pergunta
function Change_texts(texto_recebido){
    var texttop = document.getElementById('texto');
    var sai = document.getElementById('some');
    var ct = document.getElementById('content');

    switch(texto_recebido){
        case "mensagem":
            texttop.innerHTML = 'Dê seu feedback';
            sai.innerHTML = 'Você gostou da mensagem?';
            break;
        case "negativo":
            texttop.innerHTML = 'Ela ficou triste...';
            sai.innerHTML = 'Ok! você não gostou da mensagem.';
            ct.innerHTML = "Ela ficou triste porque você não gostou. :(";
            break;
        case "positivo":
            texttop.innerHTML = 'Ela ficou feliz!';
            sai.innerHTML = 'Uau! você gostou da mensagem.';
            ct.innerHTML = "Ela ficou feliz porque você gostou. :D";
            break;
        case "brava":
            texttop.innerHTML = 'Ela ficou brava!!';
            sai.innerHTML = '';
            ct.innerHTML = "Ela fica brava quando tocam nela. Peça uma nova mensagem para ela se esquecer disso.";
            break;
    }
}
