import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; //la funcion iniciar sesion
import { FirestoreService } from 'src/app/shared/services/firestore.service'; //nos trae los datos del firebase
import { Usuario } from 'src/app/models/usuario'; //interfaz del usuario
import { Router } from '@angular/router'; //navegacion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre:'',
    email:'',
    rol:'',
    contrasena:''
  }

  constructor(
    public servicioAuth: AuthService,
    public firestore: FirestoreService,
    public router: Router,
  ){}


  async iniciar(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena,
    }
    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
    .then(res =>{
      alert("logueado con exito wacho")

      this.router.navigate(['/inicio']);
    })

    .catch(error =>{
      alert("Hubo un error al iniciar sesión: (\n "+error);
    })
  }

}
