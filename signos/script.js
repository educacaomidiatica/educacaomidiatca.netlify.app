function submit(){
    if (document.getElementById('name').value.length == 0 || document.getElementById('month').value.length == 0){
        alert('Nome ou Mês inválidos!')
    }
    else{
        var month = document.getElementById('month').value

        if (month.toLowerCase() == "março" || "March"){
            alert("mes ok")
        }
        else{
            alert('mes not ok')
        }
        var form = document.getElementById('form')
        form.href = "http://127.0.0.1:5500/sdz/peixe/index.html"
    }
    console.log("ok")
}
