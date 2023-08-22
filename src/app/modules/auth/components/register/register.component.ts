import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; //nuevo servicio
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    contrasena:''
  }

  constructor(public servicioAuth: AuthService){

  }

  //tomamos nuevos registros y mostramos los resultados
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };

    
    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    .then(res => {
      alert("Se ha agregado un nuevo usuario con exito")
    })
    .catch(error => alert("Hubo un error al cargar el usuario (\n"+error)
    );

  
    console.log(res);
  }
}
