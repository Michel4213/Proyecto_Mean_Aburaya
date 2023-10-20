import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ["../../../../styles.css"]
})

export class HomeComponent implements OnInit {
  arrProducts: any[] = []; 

  constructor(private productosService:ProductsService) { }

  async ngOnInit() {
    try {
      const productos = await this.productosService.traerTodo();
      this.arrProducts = productos;
      console.log(productos);
    } catch (error) {
      console.error('Error al obtener los productos', error);
    }
  }
}