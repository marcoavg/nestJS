import axios from 'axios';
import type { PokeAPIResponse } from '../interfaces/pokeapi-response.interface';


export class Pokemon {

    constructor(public id: number, public name: string) {}

    speak(){
        console.log(`${this.name} está hablando`);
    }

    async getMove(){
        const {data}  = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves);
        return data.moves;
        
    }
}

export const bulbasaur = new Pokemon(1, 'Bulbasaur');
export const charmander = new Pokemon(2, 'Charmander');

charmander.getMove();