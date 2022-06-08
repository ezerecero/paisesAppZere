import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `

  button {
    margin-right: 5px;
  }
  
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';

  region: string = ''; 
  hayError: boolean = false;
  paises: Country[] = [];


  constructor(private pasiService: PaisService) { }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva)
              ? 'btn btn-primary'
              : 'btn btn-outline-primary'
  }

  activarRegion(regionRecibida:string){
    
    if (regionRecibida === this.regionActiva) {
      console.log('Nada que actualizar');
      return;
    }
    
    this.regionActiva = regionRecibida;

    this.hayError = false;
    this.region = regionRecibida;
    this.paises = [];

    this.pasiService.buscarRegion(this.region)
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
