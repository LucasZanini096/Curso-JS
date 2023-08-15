function Calculadora () {

    //Atributos
    this.display = document.querySelector(".display")
    this.btnClear = document.querySelector(".btn-clear")

    this.inicia = () => { 
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keypres', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear(el);
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.addNumDisplay(el);
        });
    };

    this.addNumDisplay = el => { 
        this.display.value += el.innerText;
        this.display.focus(); //Tirando o foco do último botão clicado
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0,-1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta Inválida')
                return
            }

            this.display.value = conta;
        } catch(e) {
            alert("Conta inválida")
            return;
        }
    }
    
}