function salvar(){
    if (document.getElementById('name').value.length == 0 || document.getElementById('senha').value.length == 0){
        alert('nome ou senha invalidos')
    }
    else{
        localStorage.name = document.getElementById('name').value;
        localStorage.senha = document.getElementById('senha').value;
        console.log('database is save');
        var form = document.getElementById('form_one');
        form.action = "login.html"
    }
}

function entrar(){
    var nome = document.getElementById('name').value;
    var senha = document.getElementById('senha').value;
    if (localStorage.name && localStorage.senha){
        console.log(`${localStorage.name} ${localStorage.senha}`)
        if (nome != localStorage.name && senha != localStorage.senha){
            alert("Nome e Senha incorretos")
        }
        else{
            if (nome != localStorage.name){
                alert('Nome incorreto');
            }

            if (senha != localStorage.senha){
                alert('Senha incorreta');        
            }
        }
        
        if (localStorage.name == nome && localStorage.senha == senha){
           console.log("All Ok");
            localStorage.request = 'true'
            var form = document.getElementById('form_two');
            form.action = "https://educacaomidiatica.netlify.app"
        }
    }
}
