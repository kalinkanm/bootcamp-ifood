type TCliente = {
    cpf: string
    nome: string
    tipoCarteira: string
    veiculoAlugado?: string | null
}

type TVeiculo = {
    placa: string
    valorDiaria: number
    tipoVeiculo: string
    modelo: string
    reservadoPor?: string | null
}