const frutas = ["laranja", "limão", "uva"]

const fruta1 = document.getElementsByTagName('li')[0]
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementsByTagName('li')[1]
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementsByTagName('li')[2]
fruta3.innerHTML = frutas[2]

const fruta4 = document.getElementsByTagName('li')[3]
fruta4.innerHTML = frutas[3]

const pegarNomeFruta = document.getElementById('nome-fruta')

const funcaoPegarFruta = () => {
    console.log(pegarNomeFruta.value);
}

const funcaoNovaFruta = () => {
    fruta4.innerHTML = pegarNomeFruta.value

    pegarNomeFruta.value = ''
}