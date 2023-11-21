import { Cliente } from "./cliente";
import { Veiculo } from "./veiculo";

const veiculos: Array<Veiculo> = [];
const clientesComReserva: Array<Cliente> = []; // cpf
const veiculosReservados: Array<Veiculo> = [];

export class Locadora {


    buscarPlaca(placaBuscar: string): boolean {
        if (veiculos.find(veiculo => veiculo.placa === placaBuscar)) {
        return true
        } else {
            return false
        }
    }

    cadastrarVeiculo(placa: string, horaAluguel: number, tipoVeiculo: string, modelo: string) {
        if (!this.buscarPlaca(placa)) {

            const novoVeiculo = new Veiculo(placa, horaAluguel, tipoVeiculo, modelo)
            veiculos.push(novoVeiculo)
        }
        else { 
            console.error("Placa já cadastrada!")
        }

    }

    aluguel() {

    }

    devolucao() {

    }

    faturamento() {

    }
}