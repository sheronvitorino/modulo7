const form = document. getElementById('validaNumero');
form.addEventListener ('submit', function (e){
    e.preventDefault();

        var numero1 = parseFloat(document.getElementById('valor-um').value);
        var numero2 = parseFloat(document.getElementById('valor-dois').value);
        const mensagemErro = 'O valor 2 precisa ser maior que o valor 1';
        const mensagemPositiva = 'O valor 2 é maior que o valor 1';
        const valorhum = document.getElementById ('valor-um');
        const valordois = document.getElementById ('valor-dois');        

        if (numero2 > numero1) {
            const conteudomensagempositiva = document.querySelector('.mensagemPositiva');
            conteudomensagempositiva.innerHTML = mensagemPositiva;
            conteudomensagempositiva.style.display = 'block';
            
            valorhum.value = '';
            valordois.value = '';
            mensagemPositiva = '';

        }else {
            const conteudomensagemerro = document.querySelector('.mensagemErros');
            conteudomensagemerro.innerHTML = mensagemErro;
            conteudomensagemerro.style.display = 'block';
            mensagemErro = '';

        }
    })            

console.log(form);