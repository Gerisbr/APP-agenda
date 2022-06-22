


function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacoes").value
    document.getElementById("anotacoes-salvas").innerHTML+="<p>" + novaAnotacao + "</p>"
    document.getElementById("anotacoes").valeu = " "
    alert("Anotação salva \ncom sucesso")
}

function SalvarAnotacao(){
    novaAnotacao = document.getElementById("Tele").value
    document.getElementById("anotacoes-salvas").innerHTML+="<p>" + novaAnotacao + "</p>"
    document.getElementById("anotacoes").valeu = " "
    alert("Anotação salva \ncom sucesso")
}

document.getElementById("botao-salvar").addEventListener("click",function(){
    SalvarAnotacao()
    navigator.vibrate(3000);
    // navigator.vibrate([1000,1000,1000])
})
