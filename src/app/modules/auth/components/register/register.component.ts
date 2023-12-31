import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; //nuevo servicio
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

import { Router } from '@angular/router';


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
    email:'',
    contrasena:'',
    rol: '',
  }

  uid = '';

  //creamos una nueva colección para los usuarios
  coleccionUsuarios: Usuario[] = []

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore:FirestoreService,
    public router:Router,
    ){
    
  }

  //tomamos nuevos registros y mostramos los resultados
  async registrarse(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };

    
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.contrasena)
    .then(res => {
      alert("Se ha agregado un nuevo usuario con exito")

      this.router.navigate(['/inicio']);
    })
    .catch(error => alert("Hubo un error al cargar el usuario (\n"+error)
    );

    const uid = await this.servicioAuth.getUid();
    this.usuarios.uid = uid;

    this.guardarUser();
  }

  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios)
    })
    .catch(error =>{
      console.log('Error =>',console.error);
      
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}
