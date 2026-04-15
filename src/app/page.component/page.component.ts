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


  users: usuarios[] = [];

  constructor(private servicio: PageService) { }


  ngOnInit() {
    const observe = {
      next: (data: any) => {
        console.log("Datos Recibidos", data)
        this.users = data;
      },
      error: (err: any) => console.log("Cometio un error", err),
      complete: () => console.log("Completado")
    }

    this.servicio.getUsers().subscribe(observe)
  }



}
