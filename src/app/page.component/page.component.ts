import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page.service';
import { CommonModule } from '@angular/common';
import { usuarios } from '../common/page.interface';


@Component({
  selector: 'page-ss',
  imports: [CommonModule],
  styleUrls: ['./page.component.css'],
  templateUrl: './page.component.html',
})
export class PageComponent implements usuarios, OnInit {

  id: number = 0;
  name: string = '';
  email: string = '';

  public users: usuarios[] = [];

  constructor(private servicio: PageService) { }


  ngOnInit(): void {
    this.cargarUsuarios();
  }


  cargarUsuarios() {
    const observe = {
      next: (data: usuarios[]) => {
        console.log("Datos Recibidos", data)
        this.users = data;
      },
      error: (err: any) => console.log("Cometio un error", err),
      complete: () => console.log("Completado")
    }

    this.servicio.getUsers().subscribe(observe)
  }



}
