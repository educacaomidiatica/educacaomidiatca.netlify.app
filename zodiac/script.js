function submit(){
    let name = document.getElementById('name').value
    if (name.length == 0){
        alert('Nome invalido!')
    }
    console.log(name + " : " + typeof(name) + '\n' + 'size: ' + name.length)
    
    name.split("")
    var vogais = 0
    var consoantes = 0
    for (var i = 0; i < name.length; i++){
        if(/a/.test(name[i])){
            vogais += 1
        }
        else if(/j|s/.test(name[i])){
            consoantes += 1
        }
        else if(/b|k|t/.test(name[i])){
            consoantes += 2
        }
        else if(/u/.test(name[i])){
            vogais += 3
        }
        else if(/c|l/.test(name[i])){
            consoantes += 3
        }
        else if(/d|m|v/.test(name[i])){
            consoantes += 4
        }
        else if(/e/.test(name[i])){
            vogais += 5
        }
        else if(/n|w/.test(name[i])){
            consoantes += 5
        }
        else if(/o/.test(name[i])){
            vogais += 6
        }
        else if(/f|x/.test(name[i])){
            consoantes += 6
        }
        else if(/g|p|y/.test(name[i])){
            consoantes += 7
        }
        else if(/h|q|z/.test(name[i])){
            consoantes += 8
        }
        else if(/r/.test(name[i])){
            consoantes += 9
        }
        else if(/i/.test(name[i])){
            vogais += 9
        }
    }


    consoantes = consoantes.toString()
    while (consoantes.length != 1 && consoantes != '11' && consoantes != '22'){

        consoantes = consoantes.split("")
        consoantes = parseInt(consoantes[0]) + parseInt(consoantes[1])
        consoantes = consoantes.toString()
        if (consoantes.length == 1 || consoantes == '11' || consoantes == '22'){
            break
        }
    }
    consoantes = parseInt(consoantes)

    
    vogais = vogais.toString()
    while (vogais.length != 1 && vogais != '11' && vogais != '22'){
    
        vogais = vogais.split("")
        vogais = parseInt(vogais[0]) + parseInt(vogais[1])
        vogais = vogais.toString()
        if (vogais.length == 1 || vogais == '11' || vogais == '22'){
            break
        }
    }
    vogais = parseInt(vogais)


    var sintese = vogais + consoantes
    sintese = sintese.toString()
    while (sintese.length != 1 && sintese != '11' && sintese != '22'){
    
        sintese = sintese.split("")
        sintese = parseInt(sintese[0]) + parseInt(sintese[1])
        sintese = sintese.toString()
        if (sintese.length == 1 || sintese == '11' || sintese == '22'){
            break
        }
    }
    sintese = parseInt(sintese)

    console.log('interior: ' + vogais + ' : ' + typeof(vogais) + '\nexterior: ' + consoantes + ' : ' + typeof(consoantes) +'\nSíntese: ' + sintese)
    // let main = document.getElementById('main')
    
    event.preventDefault();
}
