export class Veiculo {
    private _placa: string
    private _reservado: boolean = false
    private _horaAluguel: number
    private _tipoVeiculo: string
    private _modelo: string

    constructor(placa: string, horaAluguel: number, tipoVeiculo: string, modelo: string) {
        this._horaAluguel = horaAluguel
        this._placa = placa
        this._tipoVeiculo = tipoVeiculo
        this._modelo = modelo
    }

    get placa() {
        return this._placa
    }

    get reservado() {
        return this._reservado
    }

    get horaAluguel() {
        return this._horaAluguel
    }

    get tipoVeiculo() {
        return this._tipoVeiculo
    }

    get modelo() {
        return this._modelo
    }

    set horaAluguel(horaAluguel: number) {
        this._horaAluguel = horaAluguel
    }

    set reservado(reservado: boolean) {
        this._reservado = reservado
    }



}