export class Cliente {
    private _cpf: string
    private _nome: string
    private _tipoCarteira: string

    constructor(cpf: string, nome: string, tipoCarteira: string) {
        this._cpf = cpf
        this._nome = nome
        this._tipoCarteira = tipoCarteira
        
    }

    get dados() {
        return Cliente
    }

    set tipoCarteira(tipoCarteira: string) {
        this._tipoCarteira = tipoCarteira
    }

}