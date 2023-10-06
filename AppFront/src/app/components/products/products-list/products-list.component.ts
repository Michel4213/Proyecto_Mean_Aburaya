import { Component, signal } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  arrProducts = signal<any[]>([])

  productService = inject(ProductsService);

  async ngOnInit(){
    const product = await this.productService.getAll();
    this.arrProducts.set(product);
  }
}
