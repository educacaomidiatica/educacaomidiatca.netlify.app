function submit(){
    if (document.getElementById('name').value.length == 0 || document.getElementById('month').value.length == 0){
        alert('Nome ou Mês inválidos!')
    }
    else{
        var month = document.getElementById('month').value

        if (month.toLowerCase() == "março" || "March"){
            var form = document.getElementById('form')
            form.href = "Peixes/index.html"               
        }
        else{
            alert('mes not ok')
        }
    }
}
