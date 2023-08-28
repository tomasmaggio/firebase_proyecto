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

  registrar(nombre: string, contrasena:string){
    //Retorna nuevo valor de usuario y contraseña
    
    return this.auth.createUserWithEmailAndPassword(nombre,contrasena); 
  }

  async getUid(){
    const user = await this.auth.currentUser;

    if(user==null){
      return null;
    }else{
      return user.uid;
    }
  }
}

