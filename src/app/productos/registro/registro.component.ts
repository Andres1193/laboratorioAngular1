import { Component } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  productos: Producto[] = [];

  producto: Producto = {
    nombre : '',
    precio: 0,
    stock: 0,
    estado: 'Activo'
  }
  
  agregarProducto() {
    if(this.producto.nombre.trim().length === 0 ) {
      return;
    } else if(this.producto.precio.toString().length == 0){
      return;
    } else if(this.producto.stock.toString().length == 0){
      return;
    } else if(this.producto.estado.trim().length === 0 ){
      return;
    } else {
      this.productos.push( this.producto );
      this.producto = {
      nombre: '',
      precio: 0,
      stock: 0,
      estado: 'Activo'
      }
    }
  }

  vaciarLista(){
    this.productos = [];
  }
}
