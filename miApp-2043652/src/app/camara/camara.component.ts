import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from './foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor( private FotoService: FotoServiceService) { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.FotoService.addNewToGallery();
  }

  public fotos: Foto[] = this.FotoService.fotos;
}
