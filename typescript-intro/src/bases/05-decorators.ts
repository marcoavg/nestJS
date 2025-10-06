

class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log('nada por ahora');
    }
    speak(){
        console.log(`tampoco por ahora`);
    }
}

const MyDecorator = () => {
    return ( target: Function ) => {
        //console.log('MyDecorator called');
        //console.log(target);
        //target.prototype.customName = 'Pikachu';
        return NewPokemon;
    }
}


@MyDecorator()
export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase() }!!!`);
    }
    speak(){
        console.log(`${ this.name }, ${ this.name }!`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();