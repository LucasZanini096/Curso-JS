class ValidaFormulario {
    constructor () {
        this.formulario = document.querySelector(".formulario");

        this.eventos()
    }
    //Funções errow não perdem o this na qual estão se referenciando
    eventos() {
        this.formulario.addEventListener("submit", e => { //Adicionando um evento
            this.handleSubmit(e) //Função que recebe um evento
        })
    }

    handleSubmit(e) {
        e.preventDefault() //Evita o formulario de ser enviado
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert("Formulario enviado");
            this.formulario.submit(); //Vai realizar o envio do formulário caso esteje tudo correto
        }
    }


    senhasSaoValidas() {
        const senha = this.formulario.querySelector(".senha")
        const repetirSenha = this.formulario.querySelector('.senha2')

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, "Campo senha e repetir senha precisam ser iguais")
            this.criaErro(repetirSenha, "Campos senha e repetir senha precisam ser iguais")
        }

        if (senha.value.lenght < 6 || senha.value.lenght > 12) {
            valid = false;
            this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres")
        }

        return valid
    }

    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll(".error-text")) {
            errorText.remove(); //Remove todos os alertas de error-text subsequentes
        }

        for (let campo of this.formulario.querySelectorAll(".validar")) {

            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {  //Se o campo estiver vazio (nem nenhuma informação)
                this.criaErro(campo, `O campo ${label} não pode estar em branco`)
                valid = false

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF()) valid = false;         
            }

            if(campo.classList.contains("usuario")) {
                if(!this.validaUsuario(campo)) valid = false;
            }


            }

        }

        return valid
       
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.lenght > 12 || usuario.lenght < 3) {
        this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres")
        valid = false
        }

        if(!usuario.match(/[a-zA-Z0-9]+$/g)) { //Match verifica a existência da imposição de uma expressão regular 
            this.criaErro(campo, "Nome de usuário precisa conter apenas letras e/ou números")
            valid = false
        }
        return valid
    }

    validaCPF(campo) {
            const cpf = new ValidaCPF(campo.value);

            if(!cpf.valida()) {
                this.criaErro(campo, "CPF inválido")
                return false
            }

            return true 
    }

    criaErro(campo, msg) {
        const div = document.createElement("div"); //Criou uma div
        div.innerHTML = msg; //Colocou um texto na div criada
        div.classList.add('error-text') //Adicionou uma classe a div criada
        campo.insertAdjacentElement('afterend', div) //Após o campo acabar (afterend) vai ser inserido a div 
    }
}

const valida = new ValidaFormulario();
