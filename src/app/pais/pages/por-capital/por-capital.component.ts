import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = ''; 
  hayError: boolean = false;
  paises: Country[] = [];


  constructor(private pasiService: PaisService) { }
  
  buscar( terminoRecibido: string ) {
    this.hayError = false;
    this.termino = terminoRecibido;

    this.pasiService.buscarCapital(this.termino)
      .subscribe( (paisesRespuesta) => {
        console.log(paisesRespuesta);
        this.paises = paisesRespuesta

        

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
  }

  ngOnInit(): void {
  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO: crear sugerencias
  }

}
