import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//navbar y footer en la carpeta shared
import { SharedModule } from './shared/shared.module';

//Firebase 
import { enviroments } from 'src/enviroments/enviroments';
import { AngularFireModule } from '@angular/fire/compat' //Importación de firestore (la base de datos)
import { AngularFireAuthModule} from '@angular/fire/compat/auth' // Importación de la autentificación
import { AngularFireStorageModule} from '@angular/fire/compat/storage' //Importacion de storage (imagenes, etc.)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    

    //angular
    AngularFireModule.initializeApp(enviroments.firebaseConfig), //Inicializar firebase
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
