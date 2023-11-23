import { Aluguel } from "./aluguel";
import { Cliente } from "./cliente";
import { Veiculo } from "./veiculo";

const prompt = require("prompt-sync")();
const fs = require("fs");

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
                this.alugarVeiculo();
                break;
            case "4":
                this.devolverVeiculo();
                break;
            case "5":
                this.listarVeiculosDisponiveis();
                break;
            case "6":
                this.listarVeiculosAlugados();
                break;
            case "7":
                this.faturamento();
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

    adicionarVeiculo() {
        const placa = prompt("Digite a placa do veículo: ");
        const tipoVeiculo = prompt("Digite o tipo de veículo: ").toLowerCase();
        const modelo = prompt("Digite o modelo: ");
        const horaAluguel = +(prompt("Digite o valor da hora de aluguel: "));

        const novoVeiculo = new Veiculo({ placa, tipoVeiculo, modelo, valorDiaria: horaAluguel });

        novoVeiculo.adicionarVeiculo()

    }

    adicionarCliente() {
        const cpf = prompt("Digite o CPF do cliente: ")
        const nome = prompt("Digite o nome do cliente: ")
        const tipoCarteira = prompt("Digite o tipo de carteira: ").toUpperCase()

        const novoCliente = new Cliente({ cpf, nome, tipoCarteira });

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
        const placaVeiculo = prompt("Digite a placa do veículo desejado: ");
        const nomeCliente = prompt("Digite o nome do cliente: ");
        const tipoCarteiraCliente = prompt("Digite o tipo da carteira do cliente: ").toUpperCase();
        const dataInicio = new Date(prompt("Digite a data de retirada do veículo (AAAA/MM/DD): "));
        const dataFim = new Date(prompt("Digite a data de devolução do veículo (AAAA/MM/DD): "));

        const veiculo = Veiculo.buscarVeiculoPorPlaca(placaVeiculo);
        const cliente = Cliente.buscarClientePorCpf(cpfCliente);
        const alugueis = Aluguel.buscarAlugueis();

        if (veiculo?.reservadoPor === null && cliente?.veiculoAlugado === null) {
            if ((cliente.tipoCarteira === "A" && veiculo.tipoVeiculo === "moto") ||
                (cliente.tipoCarteira === "B" && veiculo.tipoVeiculo === "carro")) {

                const novoAluguel = new Aluguel({ cpfCliente, placaVeiculo, nomeCliente, tipoCarteiraCliente, dataInicio, dataFim });

                alugueis.push(novoAluguel)
                fs.writeFileSync("./src/dados/alugueis.json", JSON.stringify(alugueis))

                Aluguel.registrarReserva(placaVeiculo, cpfCliente);
            }
        }
    }

    devolverVeiculo() {
        const cpfCliente = prompt("Digite cpf do cliente: ");
        const placaVeiculo = prompt("Digite a placa do veículo: ");

        Aluguel.devolverVeiculo(cpfCliente, placaVeiculo);
    }

    faturamento() {
        const placaVeiculo = prompt("Digite a placa do veículo: ");
        const dataInicio = new Date(prompt("Digite a data de retirada do veículo (AAAA/MM/DD): "));
        const dataFim = new Date(prompt("Digite a data de devolução do veículo (AAAA/MM/DD): "));

        Aluguel.faturamento(placaVeiculo, dataInicio, dataFim)



    }
}