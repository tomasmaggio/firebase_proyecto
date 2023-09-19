import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'
import { Action } from 'rxjs/internal/scheduler/Action';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosColeccion : AngularFirestoreCollection<Producto>

  
  constructor(private database: AngularFirestore) {
    this.productosColeccion = database.collection('productos')
   }


   crearProducto(producto:Producto){
      return new Promise(async(resolve, reject)=>{
        try{
          const id = this.database.createId();
          producto.idProducto = id;

          const resultado = await this.productosColeccion.doc(id).set(producto);

          resolve(resultado)
        } catch (error){
          reject(error);
        }
      })
   }


   obtenerProducto(){
    return this.productosColeccion.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
   }


}
