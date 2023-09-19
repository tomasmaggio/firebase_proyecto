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
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { IndumentariaComponent } from './models/productos/pages/indumentaria/indumentaria.component';
import { AbrigosComponent } from './models/productos/pages/abrigos/abrigos.component';
import { AccesoriosComponent } from './models/productos/pages/accesorios/accesorios.component' //Importacion de storage (imagenes, etc.)

@NgModule({
  declarations: [
    AppComponent,
    IndumentariaComponent,
    AbrigosComponent,
    AccesoriosComponent,
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
