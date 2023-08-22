import { Component, OnInit } from '@angular/core';
import { TarjetaInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //Propiedad pública
  public info: TarjetaInicio[];
  

  constructor(){
    this.info = [
      {
        titulo:"Dachshund Dog",
        descripcion:"El dachshund, también llamado teckel, perro vienés o perro salchicha, es una raza canina. Su peculiar fisonomía se debe a una mutación genética conocida como bassetismo, que dota a los ejemplares de unas extremidades cortas en relación con el tamaño del cuerpo.",
        imagen:"https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2022/06/perro_salchicha_caracteristicas_shedara_weinsberg_shutterstock_portada.jpg",
        alt:"Perrito salchicha"
      }
    ]
  }

  //Evento de construcción/Inicialización
  ngOnInit(): void{}


}
