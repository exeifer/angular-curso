import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Batman','Capitan America'];
  heroeBorrado: string = '';
  
  eliminarHeroe(){ 
    this.heroeBorrado = this.heroes.shift() || '';
  }

  
}
