import { Injectable } from '@angular/core';

//servicio de autenticación de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { __asyncValues } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciamos auth de Firebase
  constructor(public auth: AngularFireAuth) { }

  registrar(email: string, contrasena:string){
    //Retorna nuevo valor de usuario y contraseña
    
    return this.auth.createUserWithEmailAndPassword(email,contrasena); 
  }

//Función para login
iniciarSesion(email:string, contrasena:string){
  
  return this.auth.signInWithEmailAndPassword(email, contrasena)
}


  async getUid(){
    const user = await this.auth.currentUser;

    if(user==null){
      return null;
    }else{
      return user.uid;
    }
  }

  cerrarSesion(){
    return this.auth.signOut();
  }

}

