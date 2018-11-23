import { Cardapio } from '../../domain/cardapio/cardapio';
import { Usuario } from '../../domain/usuario/usuario';

export class Pedido{
    constructor(
        public id: string,
        public cardapio: Cardapio,
        public usuario: Usuario,
        public valor: number,
        public taxa_entrega: number,
        public nome: String,
        public email: String,
        public observacao: String
    ){

    }
}