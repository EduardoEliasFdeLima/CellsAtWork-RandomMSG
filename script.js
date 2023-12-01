function Msg(){
    var sai = document.getElementById('some')
    sai.innerHTML = 'Você gostou da mensagem?'
    sai.style.fontSize = "16px"
    sai.style.color = "#525453"


    var txt = document.getElementById('texto');
    txt.innerHTML = 'Dê seu feedback'

    
    var cont = document.getElementById('content')
    cont.style.position = "absolute"
    //cont.style.right = "20px"
    //cont.style.bottom = "58%"
    cont.style.bottom = "50%"

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/32khiLD.png"
    //plaquetalendo

    // var N = 10 *(Math.random(22)).toString(10)
    var N = (Math.random() * (22 - 0) + 0)
    var N2 = parseInt(N)
    // alert(N2)

    var ct = document.getElementById('content')

    if (N2 == 0)
        ct.innerHTML = '"Se seu dia estiver ruim, lembre-se que todo dia é aniversário de alguém."'
    
    if (N2 == 1)
        ct.innerHTML = '"Viva todo dia como se fosse o último, algum dia você acerta!"'
    
    if (N2 == 2)
        ct.innerHTML = '"Quando eu tiver um mano, ele vai se chamar Herrar. Porque Herrar é o mano!"'

    if (N2 == 3)
        ct.innerHTML = '"Não derrube um lápis no chão, ele pode ficar desapontado :("'

    if (N2 == 4)
        ct.innerHTML = '"Por que tudo junto é separado e separado é tudo junto?"'

    if (N2 == 5)
        ct.innerHTML = '"Nunca desista dos seus sonhos. Se não encontrar numa padaria, procure na próxima."'

    if (N2 == 6)
        ct.innerHTML = '"Algumas pessoas são iguais nuvens, a gente olha e vê um animal."'

    if (N2 == 7)
        ct.innerHTML = '"A vida nunca vai te derrubar se você não se levantar"'

    if (N2 == 8)
        ct.innerHTML = '"Cansado de estar cansado porque estar cansado é cansativo."'

    if (N2 == 9)
        ct.innerHTML = '"Se a vida fosse fácil bebê não nascia chorando."'

    if (N2 == 10)
        ct.innerHTML = '"O ruim não é o trabalho, o ruim é ter que ir trabalhar"'

    if (N2 == 11)
        ct.innerHTML = '"Quem disse que educação não enriquece? é só olhar para as escolas particulares"'

    if (N2 == 12)
        ct.innerHTML = '"Se tentarem te vender óculos sem lentes, não compre! É armação."'

    if (N2 == 13)
        ct.innerHTML = '"O casamento é a principal razão de qualquer divórcio"'

    if (N2 == 14)
        ct.innerHTML = '"Os primeiros 7 dias da semana são sempre os mais difíceis"'

    if (N2 == 15)
        ct.innerHTML = '"Odeio gente que não termina de falar a frase, parece que"'

    if (N2 == 16)
        ct.innerHTML = '"Atualmente os psiquiatras têm cobrado preços de doidos"'

    if (N2 == 17)
        ct.innerHTML = '"Se o trabalho duro da frutos, então deixem as árvores trabalharem"'

     if (N2 == 18)
        ct.innerHTML = '"Se o trabalho duro da frutos, então deixem as árvores trabalharem"'

    if (N2 == 19)
        ct.innerHTML = '"Já percebeu que todo mundo faz aniversário no mesmo ano"'

    if (N2 == 20)
        ct.innerHTML = '"Já pensou se chovesse macarrão? Seria massa"'

    if (N2 == 21)
        ct.innerHTML = '"Não leve a vida tão a sério, você não vai sair vivo dela"'


    document.body.style.transition = "ease 2s"
    //document.body.style.background = '#bb974d'
    document.body.style.background = '#ECCB79'
    
    var esconde = document.getElementById('SimNao')
    esconde.style.visibility = "visible"

    var Not = document.getElementById('Btn')
    Not.style.visibility = "visible"

    var Yep = document.getElementById('Btn2')
    Yep.style.visibility = "visible"
    //Yep.style.background = "#bb974d"
    //Yep.style.background = "#ECCB79"

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

    var txt = document.getElementById('texto');
    txt.innerHTML = 'Ela ficou triste...'

    var Not = document.getElementById('Btn')
    Not.style.visibility = "hidden"

    var Yep = document.getElementById('Btn2')
    //Yep.style.background = "#585858"


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

    // var bdd = document.getElementById('cd')
    // bdd.style.background = '#f1f1f1'

    var env = document.getElementById('Btn3')
    env.style.animation = "balan 1s infinite ease-in 10s"


    var boun = document.getElementById('boun')
    boun.style.animation = "none"

    var err = document.getElementById('erro1')
    // st.style.bottom = "35%";
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

    var txt = document.getElementById('texto');
    txt.innerHTML = 'Ela ficou brava!!'

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

    var txt = document.getElementById('texto');
    txt.innerHTML = 'Ela ficou Feliz!'

    var sai = document.getElementById('some')
    sai.innerHTML = 'Uau! você gostou da mensagem.'
    sai.style.fontSize = "15px"

    var ct = document.getElementById('content')
    ct.innerHTML = "Ela ficou feliz porque você gostou. :D"

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/vVFC4ge.png"
    //plaquetaFeliz 

    document.body.style.transition = "ease 2s"
    //document.body.style.background = '#62d685'
    document.body.style.background = 'green'

    if (document.body.style.background = '#62d685'){
        // document.body.style.background = '#bb974d'
    }

    var env = document.getElementById('Btn3')
    env.style.animation = "balan 1s infinite ease-in 10s"

    var st = document.getElementById('star1')
    // st.style.bottom = "35%";
    st.style.animation = "fisrtStar 2s 1 ease-out "

    var st2 = document.getElementById('star2')
   
    st2.style.animation = "SecondStar 2s 1 ease-out .3s"


    var st3 = document.getElementById('star3')
    st3.style.animation = "ThirdStar 2s 1 ease-out .2s"



}

var gu = document.getElementById('guia')


function Ajuda(){

    gu.style.visibility = "visible"

    gu.style.position = "absolute"
    gu.style.marginTop = "650px"

    //gu.style.marginBottom = "-650px"

    //gu.style.marginTop = "150%"

    //gu.style.marginBottom = "30px"

    

    document.getElementById("Btn3").style.display = "none"

   
}

function fechar(){
   
    gu.style.transition ="ease-out 2s"
   
    gu.style.marginTop = "-500px"

    document.getElementById("Btn3").style.display = "flex"
    
}
