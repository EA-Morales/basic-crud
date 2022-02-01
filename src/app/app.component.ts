import { Component } from '@angular/core';

/* 
@ Importamos la clase Empleado para crear nuestra propiedad "empleadoArray" del tipo de la
@ interfaz Empleado.
*/
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Basic CRUD';

  /* 
  @ Creamos una Propiedad llamada "empleadoArray" que es un array del tipo "Empleado", una interfaz creada y ubicada en la carpeta models/empleado.ts y la inicializamos con 3 objetos aleatorios
  */

  empleadoArray: Empleado[] = [
    {
      id: 1,
      name: 'Jhon Doe',
      country: 'Argentina',
    },
    {
      id: 2,
      name: 'Mando',
      country: 'Mandalore',
    },
    {
      id: 3,
      name: 'Grogu',
      country: 'USA',
    },
  ];

  //@ Inicializamos la propiedad "empleadoSeleccionado" del tipo Empleado, en un principio vacia
  empleadoSeleccionado: Empleado = new Empleado();

  /*  
  @Metodo llamado al hacer click en el boton "submit", chquea si el id del empleadoSeleccionado es igual a 0, si lo es, setea el id del empleado seleccionado al valor del largo del array de empleado + 1  
  @Luego hace un push al array de empleado de la propiedad empleadoSeleccionado
  @Una vez que termina el push vacia el empleadoSeleccionado creando una nueva clase de empleado
  */
  addOrEdit() {
    if (this.empleadoSeleccionado.id === 0) {
      this.empleadoSeleccionado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.empleadoSeleccionado);
    }
    this.empleadoSeleccionado = new Empleado();
  }

  /* 
  @Metodo llamado al seleccionar un elemento li de la lista de empleados en el html, nos trae el valor del empleado recorrido en el array de empleados con el *ngFor y le colocamos ese valor a la propiedad empleadoSeleccionado
  */
  openEdit(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
  }

  /* 
  @El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
  @Metodo llamado al hacer click en el boton "delete" dentro del html, usa un popup de confirm, si le damos que si hace un filter dentro del array de empleado y deja todos los objetos que sean distintos al empleadoSeleccionado y este nuevo array lo coloca dentro del array empleadoArray, asi eliminamos el empleado seleccionado.
  */
  delete() {
    if (confirm()) {
      this.empleadoArray = this.empleadoArray.filter(
        (x) => x !== this.empleadoSeleccionado
      );
      this.empleadoSeleccionado = new Empleado();
    }
  }
}
