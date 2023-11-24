const fs = require("fs");
import { Cliente } from "./cliente";

export class Veiculo {
    private _placa: string
    private _reservadoPor: string | null = null
    private _horaAluguel: number
    private _tipoVeiculo: string
    private _modelo: string

    constructor(novoVeiculo: TVeiculo) {
        this._horaAluguel = novoVeiculo.valorHora
        this._placa = novoVeiculo.placa
        this._tipoVeiculo = novoVeiculo.tipoVeiculo
        this._modelo = novoVeiculo.modelo
    }

    // get placa() {
    //     return this._placa
    // }

    // get reservado() {
    //     return this._reservado
    // }

    // get horaAluguel() {
    //     return this._horaAluguel
    // }

    // get tipoVeiculo() {
    //     return this._tipoVeiculo
    // }

    // get modelo() {
    //     return this._modelo
    // }

    // set horaAluguel(horaAluguel: number) {
    //     this._horaAluguel = horaAluguel
    // }

    // set reservado(reservado: boolean) {
    //     this._reservado = reservado
    // }


    static buscarVeiculos(): Array<TVeiculo> {
        return JSON.parse(fs.readFileSync("./src/dados/veiculos.json", "utf-8"));
    }
    
    static buscarVeiculoPorPlaca(placa: string): TVeiculo | undefined {
        const veiculos = Veiculo.buscarVeiculos();
        return veiculos.find(veiculo => veiculo.placa === placa)
    }

    adicionarVeiculo(): void {
        const veiculos = Veiculo.buscarVeiculos();

        if (Veiculo.buscarVeiculoPorPlaca(this._placa)) {
            console.error("Placa já cadastrada!")
            return;
        }

        veiculos.push({
            placa: this._placa,
            tipoVeiculo: this._tipoVeiculo,
            valorHora: this._horaAluguel,
            modelo: this._modelo,
            reservadoPor: this._reservadoPor = null
        })
        fs.writeFileSync("./src/dados/veiculos.json", JSON.stringify(veiculos))
    }

    static listarVeiculosDisponiveis(): void {
        const veiculos: Array<TVeiculo> = Veiculo.buscarVeiculos();
        const veiculosDisponiveis = veiculos.filter(veiculo => veiculo.reservadoPor === null)

        return console.log(veiculosDisponiveis)
    }
    static listarVeiculosAlugados(): void {
        const veiculos: Array<TVeiculo> = Veiculo.buscarVeiculos();
        const veiculosAlugados = veiculos.filter(veiculo => veiculo.reservadoPor !== null)

        return console.log(veiculosAlugados)
    }

}