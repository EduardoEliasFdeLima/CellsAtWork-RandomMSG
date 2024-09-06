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
    '"Não leve a vida tão a sério, você não vai sair vivo dela."',
    '"Por que a calça a gente bota e a bota a gente calça?"',
    '"É raro, mas acontece muito!"',
    '"Não empilhe livros à toa, eles podem se sentir pressionados."',
    '"Não ignore o despertador, ele só quer te ajudar a levantar."',
    '"Cuidado ao quebrar um relógio, ele pode perder a hora."',
    '"Cuidado com o ventilador, ele pode acabar virando as costas para você."',
    '"O veneno quando passa da validade, perde o efeito ou fica mais forte?"'
]

var texttop = document.getElementById('texto');

function Msg(){
    var sai = document.getElementById('some')
    sai.innerHTML = 'Você gostou da mensagem?'
    sai.style.fontSize = "16px"
    sai.style.color = "#525453"

    texttop.innerHTML = 'Dê seu feedback'
    
    var cont = document.getElementById('content')
    cont.style.position = "absolute"
    cont.style.bottom = "50%"

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/32khiLD.png"
    //plaquetalendo

    // var N = 10 *(Math.random(20)).toString(10)
    var N = (Math.random() * (frs.length - 0) + 0)
    var N2 = parseInt(N)

    var ct = document.getElementById('content')
    
    ct.innerHTML = frs[N2];

    document.body.style.transition = "ease 2s"
    //document.body.style.background = '#bb974d'
    document.body.style.background = '#ECCB79'
    
    var esconde = document.getElementById('SimNao')
    esconde.style.visibility = "visible"

    var Not = document.getElementById('Btn')
    Not.style.visibility = "visible"

    var Yep = document.getElementById('Btn2')
    Yep.style.visibility = "visible"

    var env = document.getElementById('Btn3')
    env.style.animation = "none"



    var st = document.getElementById('star1')
    st.style.animation = "none"

    var st2 = document.getElementById('star2')
    st2.style.animation = "none"

    var st3 = document.getElementById('star3')
    st3.style.animation = "none"

    var err = document.getElementById('erro1')
    err.style.animation = "none"

    var err2 = document.getElementById('erro2')
    err2.style.animation = "none"

    var err3 = document.getElementById('erro3')
    err3.style.animation = "none"

}

function Msg2(){
    //Botão não
    var esconde = document.getElementById('SimNao')
    esconde.style.visibility = "visible"
   
    texttop.innerHTML = 'Ela ficou triste...'

    var Not = document.getElementById('Btn')
    Not.style.visibility = "hidden"

    var Yep = document.getElementById('Btn2')

    var sai = document.getElementById('some')
    sai.innerHTML = 'Ok! você não gostou da mensagem.'
    sai.style.fontSize = "15px"

    var ct = document.getElementById('content')
    ct.innerHTML = "Ela ficou triste porque você não gostou. :("

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/5lbHKKN.png"
    //plaquetatriste

    document.body.style.transition = "ease 2s"
    document.body.style.background = '#585858'

    var env = document.getElementById('Btn3')
    env.style.animation = "balan 1s infinite ease-in 10s"


    var boun = document.getElementById('boun')
    boun.style.animation = "none"

    var err = document.getElementById('erro1')
    err.style.animation = "fisrtStar 2s 1 ease-out "

    var err2 = document.getElementById('erro2')

    err2.style.animation = "SecondStar 2s 1 ease-out .3s"

    var err3 = document.getElementById('erro3')
    err3.style.animation = "ThirdStar 2s 1 ease-out .2s"

}


function Msg3(){
    //Doubleclick nela
    var esconde = document.getElementById('SimNao')
    esconde.style.visibility = "hidden"

    texttop.innerHTML = 'Ela ficou brava!!'

    var sai = document.getElementById('some')
    sai.style.color = "#bcdde6"

    var Yep = document.getElementById('Btn2')
    Yep.style.visibility = "hidden"

    var Not = document.getElementById('Btn')
    Not.style.visibility = "hidden"

    var ct = document.getElementById('content')
    ct.innerHTML = "Ela fica brava quando tocam nela. Peça uma nova mensagem para ela se esquecer disso."

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/Vc61ybA.png"
    //plaquetaBrava

    document.body.style.transition = "ease 2s"
    document.body.style.background = '#e44951'

    var boun = document.getElementById('boun')
    boun.style.animation = "bounce .4s"


}


function Msg4(){
    //Botão simmm

    var Yep = document.getElementById('Btn2')
    Yep.style.visibility = "hidden"


    texttop.innerHTML = 'Ela ficou Feliz!'

    var sai = document.getElementById('some')
    sai.innerHTML = 'Uau! você gostou da mensagem.'
    sai.style.fontSize = "15px"

    var ct = document.getElementById('content')
    ct.innerHTML = "Ela ficou feliz porque você gostou. :D"

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/vVFC4ge.png"
    //plaquetaFeliz 

    document.body.style.transition = "ease 2s"
    document.body.style.background = '#62d685'

    var env = document.getElementById('Btn3')
    env.style.animation = "balan 1s infinite ease-in 10s"

    var st = document.getElementById('star1')
    st.style.animation = "fisrtStar 2s 1 ease-out "

    var st2 = document.getElementById('star2')
    st2.style.animation = "SecondStar 2s 1 ease-out .3s"

    var st3 = document.getElementById('star3')
    st3.style.animation = "ThirdStar 2s 1 ease-out .2s"

}

var gu = document.getElementById('guia')

function Ajuda(){
    gu.style.visibility = "visible"
    gu.style.marginTop = "650px"
    gu.style.position = "absolute"
    document.getElementById("Btn3").style.display = "none"  
}

function fechar(){
    gu.style.transition ="ease-out 2s"
    gu.style.marginTop = "-500px"
    document.getElementById("Btn3").style.display = "flex"
    
}
