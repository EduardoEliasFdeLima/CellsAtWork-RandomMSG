function Msg(){
    var sai = document.getElementById('some')
    sai.innerHTML = 'Você gostou da mensagem?'
    sai.style.fontSize = "15px"
    sai.style.color = "#525453"

    
    var cont = document.getElementById('content')
    cont.style.position = "absolute"
    cont.style.right = "20px"
    cont.style.bottom = "58%"

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/32khiLD.png"
    //plaquetalendo

    var N = 10 *(Math.random()).toString(10)
    var N2 = parseInt(N)

    var ct = document.getElementById('content')

    if (N2 == 0)
        ct.innerHTML = "Se seu dia estiver ruim, lembre-se que todo dia é aniversário de alguém."
    
    if (N2 == 1)
        ct.innerHTML = "Viva todo dia como se fosse o último, algum dia você acerta!"
    
    if (N2 == 2)
        ct.innerHTML = "Quando eu tiver um mano, ele vai se chamar Herrar. Porque Herrar é o mano!"

    if (N2 == 3)
        ct.innerHTML = "Não derrube um lápis no chão, ele pode ficar desapontado :("

    if (N2 == 4)
        ct.innerHTML = "Por que tudo junto é separado e separado é tudo junto?"

    if (N2 == 5)
        ct.innerHTML = "Nunca desista dos seus sonhos. Se não encontrar numa padaria, procure na próxima."

    if (N2 == 6)
        ct.innerHTML = "Algumas pessoas são iguais nuvens, a gente olha e vê um animal."

    if (N2 == 7)
        ct.innerHTML = "A vida nunca vai te derrubar se você não se levantar"

    if (N2 == 8)
        ct.innerHTML = "Cansado de estar cansado porque estar cansado é cansativo."

    if (N2 == 9)
        ct.innerHTML = "Se a vida fosse fácil bebê não nascia chorando."

    //Quem disse que eduaçação não enriquece? é só olhar para as escolas particulares
    

    document.body.style.transition = "ease 2s"
    document.body.style.background = '#bb974d'
    
    var esconde = document.getElementById('SimNao')
    esconde.style.visibility = "visible"

    var Not = document.getElementById('Btn')
    Not.style.visibility = "visible"

    var Yep = document.getElementById('Btn2')
    Yep.style.visibility = "visible"
    Yep.style.background = "#bb974d"
    

}

function Msg2(){
    //Botão não
    var esconde = document.getElementById('SimNao')
    esconde.style.visibility = "visible"

    var Not = document.getElementById('Btn')
    Not.style.visibility = "hidden"

    var Yep = document.getElementById('Btn2')
    Yep.style.background = "#585858"


    var sai = document.getElementById('some')
    sai.innerHTML = 'Ok! você não gostou da mensagem.'
    sai.style.fontSize = "13px"

    var ct = document.getElementById('content')
    ct.innerHTML = "Ela ficou triste porque você não gostou. :("

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/5lbHKKN.png"
    //plaquetatriste

    document.body.style.transition = "ease 2s"
    document.body.style.background = '#585858'

}


function Msg3(){
    //Doubleclick nela
    var esconde = document.getElementById('SimNao')
    esconde.style.visibility = "hidden"

    var sai = document.getElementById('some')
    sai.style.color = "#bcdde6"

    var Yep = document.getElementById('Btn2')
    Yep.style.visibility = "hidden"

    var Not = document.getElementById('Btn')
    Not.style.visibility = "hidden"

    var ct = document.getElementById('content')
    ct.innerHTML = "Ela fica brava quando tocam muito nela"

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

    var sai = document.getElementById('some')
    sai.innerHTML = 'Uau! você gostou da mensagem.'
    sai.style.fontSize = "13px"

    var ct = document.getElementById('content')
    ct.innerHTML = "Ela ficou feliz porque você gostou. :D"

    var img = document.querySelector('img')
    img.src = "https://i.imgur.com/vVFC4ge.png"
    //plaquetaFeliz 

    document.body.style.transition = "ease 2s"
    document.body.style.background = '#62d685'

    if (document.body.style.background = '#62d685'){
        document.body.style.background = '#bb974d'
    }


}

var gu = document.getElementById('guia')


function Ajuda(){

    gu.style.visibility = "visible"

    gu.style.marginTop = "620px"

    gu.style.position = "absolute"

   
}

function fechar(){
   
    gu.style.transition ="ease-out 2s"
   
    gu.style.marginTop = "-500px"
    
}