import { Cliente } from "./cliente";
import { Veiculo } from "./veiculo";

const prompt = require("prompt-sync")();

export class Locadora {
    menu() {
        console.log(`
        1. Cadastrar veículo
        2. Cadastrar cliente
        3. Alugar veículo
        4. Devolver veículo
        5. Listar veículos disponíveis
        6. Listar veículos alugados
        7. Mostrar fatura do cliente
        8. Sair do sistema

        `)

        const opcao = prompt("Escolha uma opção: ")
        let sair = false;
        switch (opcao) {
            case "1":
                this.adicionarVeiculo();
                break;
            case "2":
                this.adicionarCliente();
                break;
            case "3":

                break;
            case "4":

                break;
            case "5":
                this.listarVeiculosDisponiveis();
                break;
            case "6":
                this.listarVeiculosAlugados();
                break;
            case "7":

                break;
            case "8":
                sair = true;
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

        const novoVeiculo = new Veiculo({ placa, tipoVeiculo, modelo, valorDiaria: horaAluguel });

        novoVeiculo.adicionarVeiculo()

    }

    adicionarCliente() {
        const cpf = prompt("Digite o CPF do cliente: ")
        const nome = prompt("Digite o nome do cliente: ")
        const tipoCarteira = prompt("Digite o tipo de carteira: ").toUpperCase()

        const novoCliente = new Cliente(cpf, nome, tipoCarteira);

        novoCliente.adicionarCliente()

    }

    listarVeiculosDisponiveis() {
        Veiculo.listarVeiculosDisponiveis()
    }

    listarVeiculosAlugados() {
        Veiculo.listarVeiculosAlugados()
    }

    alugarVeiculo() {
        const cpfCliente = prompt("Digite cpf do cliente: ");
        const placaVeiculo = prompt("Digite a placa do carro desejado: ");
        const nome = prompt("Digite o nome do cliente: ");
        const tipoCarteira = prompt("Digite o tipo da carteira do cliente: ");
        const diarias = +(prompt("Digite o número de diárias: "))

        // Aluguel.reservarVeiculo();
    }

    devolverVeiculo() {
        const cpf = prompt("Digite cpf do cliente: ");
        const placa = prompt("Digite a placa do carro: ");

        // Aluguel.devolverVeiculo(cpf, placa);
    }

    faturamento() {

    }
}