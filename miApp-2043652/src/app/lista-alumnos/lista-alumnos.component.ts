import { Component, OnInit } from '@angular/core';
import { alumno } from './alumno.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})

export class ListaAlumnosComponent  implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }  

  result: string = '';
  
  

  alumnos : alumno[] = [
    {
      nombre : 'Katherine Hernandez',
      presente: true
    },
    {
      nombre: 'Ana Martinez',
      presente: true
    },
    {
      nombre: 'Williams Sanchez',
      presente: false
    }
  ]; //= ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  agregaAlumno(): void{
    this.alumnos.push(this.alumno);

    this.alumno = {
      nombre: '',
      presente: false
    }
  }
  alumno: alumno = {
    nombre: '',
    presente: false
  }  
}
