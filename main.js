const form = document. getElementById('validaNumero');
form.addEventListener ('submit', function (e){
    e.preventDefault();

        var numero1 = parseFloat(document.getElementById('valor-um').value);
        var numero2 = parseFloat(document.getElementById('valor-dois').value);
        
        if (numero2 > numero1){
            alert("O valor 2 é maior que o valor 1 ");
        }else 
            if(numero1 > numero2)
            alert("O valor 2 é menor que o valor 1 ");
            else
            alert("Os valores são iguais");
            document.getElementById('valor-um').value='';
            document.getElementById('valor-dois').value='';            

    })            

console.log(form);