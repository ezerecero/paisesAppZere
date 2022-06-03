import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = ''; 
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private pasiService: PaisService) { }
  
  buscar() {
    this.hayError = false;
    console.log(this.termino)
    this.pasiService.buscarPais(this.termino)
      .subscribe( (paisesRespuesta) => {
        console.log(paisesRespuesta);
        this.paises = paisesRespuesta

        

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
  }

}
  