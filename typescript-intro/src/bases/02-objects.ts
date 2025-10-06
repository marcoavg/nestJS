

interface Pokemon{
    id: number;
    name: string;
    age?: number; 

}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 25
}  

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 30
} 

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasaur, charmander);

console.log(pokemons);