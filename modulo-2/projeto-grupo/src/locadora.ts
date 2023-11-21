import { Cliente } from "./cliente";
import { Veiculo } from "./veiculo";

const prompt = require("prompt-sync")();

export class Locadora {
    menu() {
        console.log(`
        0 - Sair
        1 - Adicionar veículo
        2 - Adicionar cliente
        3 - Ver veículos

        `)

        const opcao = prompt("Escolha uma opção: ")
        let sair = false;
        switch (opcao) {
            case "0":
                sair = true;
                break;
            case "1":
                this.adicionarVeiculo();
                break;
            case "2":
                this.adicionarCliente();
                break;
            case "3":
                this.listarVeiculos();
                break;
            default:
                console.log("Digite uma opção válida!")
                break;
        }

        if (!sair) {
            prompt("Pressione ENTER para continuar")

            this.menu()
        };

    }


    // buscarPlaca(placaBuscar: string): boolean {
    //     if (veiculos.find(veiculo => veiculo.placa === placaBuscar)) {
    //     return true
    //     } else {
    //         return false
    //     }
    // }

    // adicionarVeiculo() {
    //     const placa = 
    //     if (!this.buscarPlaca(placa)) {

    //         const novoVeiculo = new Veiculo(placa, horaAluguel, tipoVeiculo, modelo)
    //         veiculos.push(novoVeiculo)
    //     }
    //     else { 
    //         console.error("Placa já cadastrada!")
    //     }

    // }

    adicionarVeiculo() {
        const placa = prompt("Digite a placa do veículo: ");
        const tipoVeiculo = prompt("Digite o tipo de veículo: ");
        const modelo = prompt("Digite o modelo: ");
        const horaAluguel = +(prompt("Digite o valor da hora de aluguel: "));

        const novoVeiculo = new Veiculo({ placa, tipoVeiculo, modelo, horaAluguel });

        novoVeiculo.adicionarVeiculo()

    }

    adicionarCliente() {
        const cpf = prompt("Digite o CPF do cliente: ")
        const nome = prompt("Digite o nome do cliente: ")
        const tipoCarteira = prompt("Digite o tipo de carteira: ")

        const novoCliente = new Cliente(cpf, nome, tipoCarteira);

        novoCliente.adicionarCliente()

    }

    listarVeiculos() {
        Veiculo.listarVeiculos()
    }

    alugarVeiculo() {
        const cpf = prompt("Digite cpf do cliente: ");
        const placa = prompt("Digite a placa do carro desejado: ");

        // Veiculo.alugarVeiculo(cpf, placa);
    }

    devolverVeiculo() {
        const cpf = prompt("Digite cpf do cliente: ");
        const placa = prompt("Digite a placa do carro: ");

        // Veiculo.devolverVeiculo(cpf, placa);
    }

    faturamento() {

    }
}