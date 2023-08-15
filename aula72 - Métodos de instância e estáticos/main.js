class ControleRemoto {
    constructor(tv,) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância (tenho que instânciar um objeto antes de executar um método)
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Método estático -> É um método referente a classe
    static trocaPilha () {
        console.log("Ok, vou trocar.")
    }
}

const controle1 = new ControleRemoto("Lg")
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)


ControleRemoto.trocaPilha();

//Math.randown -> exemplo de método estático (Math = classe)
