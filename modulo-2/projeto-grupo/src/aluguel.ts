import { Cliente } from "./cliente"
import { Veiculo } from "./veiculo"


export class Aluguel {
    private _placaVeiculo: string
    private _cpfCliente: string
    private _nomeCliente: string
    private _tipoCarteiraCliente: string
    private _diarias: number

    constructor(placaVeiculo: string, cpfCliente: string, nomeCliente: string, tipoCarteiraCliente: string, diarias: number) {
        this._placaVeiculo = placaVeiculo
        this._cpfCliente = cpfCliente
        this._nomeCliente = nomeCliente
        this._tipoCarteiraCliente = tipoCarteiraCliente
        this._diarias = diarias
    }

    static reservarVeiculo(placa: string, cpfCliente: string, nome: string, tipoCarteira: string, diarias: number): void {
        const veiculo = Veiculo.buscarVeiculoPorPlaca(placa);
        const cliente = Cliente.buscarClientePorCpf(cpfCliente); 

        if ( veiculo?.reservadoPor === null && cliente?.veiculoAlugado === null) {
            if (cliente.tipoCarteira === "A" && veiculo.tipoVeiculo === "moto") {


            } else if (cliente.tipoCarteira === "B" && veiculo.tipoVeiculo === "carro") {
                
            }
        }




        // veiculos[index].reservadoPor = Usuario;
        // fs.writeFileSync("./src/dados/livros.json", JSON.stringify(veiculos))
    }
}