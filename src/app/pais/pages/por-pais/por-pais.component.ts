import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = ''; 
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private pasiService: PaisService) { }
  
  buscar( terminoRecibido: string ) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = terminoRecibido;

    this.pasiService.buscarPais(this.termino)
      .subscribe( (paisesRespuesta) => {
        console.log(paisesRespuesta);
        this.paises = paisesRespuesta

        

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.pasiService.buscarPais(termino)
      .subscribe( paises => this.paisesSugeridos = paises.slice(0,5),
        (err) => this.paisesSugeridos = []
      )

  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

}
  