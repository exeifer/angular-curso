import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad  : number = 45;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return ` ${ this.nombre } - ${ this.edad } `;
    }

    i:number = 0;
    cambiarNombre(): void {
        this.nombre = 'Spiderman';
        this.i++;
        if( this.i === 2){
            this.nombre = 'Ironman';
            this.i = 0
         }
         console.log(this.i);

    }

    cambiarEdad(): void{
        this.edad = 25;
    }

}