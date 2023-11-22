import { Cliente } from "./cliente"
import { Veiculo } from "./veiculo"

const fs = require("fs");

export class Aluguel {
    private _placaVeiculo: string
    private _cpfCliente: string
    private _nomeCliente: string
    private _tipoCarteiraCliente: string
    private _dataInicio: Date
    private _dataFim: Date

    constructor(placaVeiculo: string, cpfCliente: string, nomeCliente: string, tipoCarteiraCliente: string, dataInicio: Date, dataFim: Date) {
        this._placaVeiculo = placaVeiculo
        this._cpfCliente = cpfCliente
        this._nomeCliente = nomeCliente
        this._tipoCarteiraCliente = tipoCarteiraCliente
        this._dataInicio = dataInicio
        this._dataFim = dataFim
    }

    static reservarVeiculo(placaVeiculo: string, cpfCliente: string, nome: string, tipoCarteira: string): void {
        const veiculo = Veiculo.buscarVeiculoPorPlaca(placaVeiculo);
        const cliente = Cliente.buscarClientePorCpf(cpfCliente);

        if (veiculo?.reservadoPor === null && cliente?.veiculoAlugado === null) {
            if ((cliente.tipoCarteira === "A" && veiculo.tipoVeiculo === "moto") ||
                (cliente.tipoCarteira === "B" && veiculo.tipoVeiculo === "carro")) {

                const veiculos = Veiculo.buscarVeiculos();
                const indexVeiculo = veiculos.findIndex(veiculo => veiculo.placa === placaVeiculo)
                const clientes = Cliente.buscarCliente();
                const indexCliente = clientes.findIndex(cliente => cliente.cpf === cpfCliente)

                veiculos[indexVeiculo].reservadoPor = cpfCliente;
                fs.writeFileSync("./src/dados/veiculos.json", JSON.stringify(veiculos))

                clientes[indexCliente].veiculoAlugado = placaVeiculo;
                fs.writeFileSync("./src/dados/clientes.json", JSON.stringify(clientes))
            }
        }
    }
    static devolverVeiculo(placaVeiculo: string, cpfCliente: string) {
        const veiculos = Veiculo.buscarVeiculos();
        const indexVeiculo = veiculos.findIndex(veiculo => veiculo.placa === placaVeiculo)
        const clientes = Cliente.buscarCliente();
        const indexCliente = clientes.findIndex(cliente => cliente.cpf === cpfCliente)

        veiculos[indexVeiculo].reservadoPor = null;
        fs.writeFileSync("./src/dados/veiculos.json", JSON.stringify(veiculos))

        clientes[indexCliente].veiculoAlugado = null;
        fs.writeFileSync("./src/dados/clientes.json", JSON.stringify(clientes))

    }

    static faturamento(placaVeiculo: string, dataInicio: Date, dataFim: Date): number {
        const veiculo = Veiculo.buscarVeiculoPorPlaca(placaVeiculo);
        let valorDaDiaria = veiculo?.valorDiaria;
        const diarias = Math.floor(((dataFim.getTime() - dataInicio.getTime()) / (1000 * 60 * 60 * 24)));
        const acresceCarro = 1.1;
        const acresceMoto = 1.05;
        let valorTotal = 0;

        if (veiculo?.tipoVeiculo === "moto") {
            valorTotal = veiculo.valorDiaria * diarias * acresceMoto;
        } else if (veiculo?.tipoVeiculo === "carro") {
            valorTotal = veiculo.valorDiaria * diarias * acresceCarro;
        }

        console.log(`
        Número de diárias: ${diarias}
        Valor da diária: ${valorDaDiaria.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        Acréscimos:
                Moto = 5%
                Carro = 10%

        ####################
        Valor total: ${valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        `)

        return valorTotal

    }


}