import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country, Translation, Name } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //El signo de admiracion es decir a Typescript que esta bien si es nulo para que no se queje
  
  pais!: Country;

    constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    
    ) { }

  ngOnInit(): void {

    //El switchMap lo que hace es retornar un observable por otro
    this.activatedRoute.params
      .pipe( 
         switchMap( ({id}) => this.paisService.getPaisPorAplpha(id) ),
         tap(console.log)
       )
      .subscribe( paisResp => { 
          console.log(paisResp);
          this.pais = paisResp[0] //En las preguntas lei que lo que devuelve es un array
          console.log(this.pais);
          
          
      }
          );      


    //Este código es igual que el que está abajo, el de abajo es mas simple de usar.
    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
    //     console.log(id);

    //     this.paisService.getPaisPorAplpha(id)
    //       .subscribe(pais =>{
    //         console.log(pais);   
    //         <Country>this.pais as Country;         
    //         this.pais = pais;
    //         console.log(this.pais.name?.common);
    //         console.log(typeof(this.pais));
    //       }) 

    // })

    

  }

}
