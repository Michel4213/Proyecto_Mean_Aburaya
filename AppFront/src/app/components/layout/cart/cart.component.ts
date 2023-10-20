import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Products1Component } from '../products1/products1.component';
import { Order, SelectedSize } from 'src/app/interface/order.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ["../../../../styles.css"]
})
export class CartComponent {

  // constructor(private productosService:ProductsService) { }

  // // Instancia de Products1Component para acceder a cartList y funciones
  // productsComponent: Products1Component = new Products1Component();

  // ngOnInit() {
  //   // Ejemplo de cómo acceder a cartList y llamar a una función
  //   const cartList = this.productsComponent.cartList;
  //   // Llama a la función addtoCart
  //   this.productsComponent.addtoCart();

  // async ngOnInit() {
  //   try {
  //     const productos = await this.productosService.traerTodo();
  //     this.arrProducts = productos;
  //     console.log(productos);
  //   } catch (error) {
  //     console.error('Error al obtener los productos', error);
  //   }
  // }

  // async createOrder() {
  //    try {
  //     const products = this.cartList.map(item => {
  //       return 
  //       {productId: item._id, talla:item.talla}
  //       const newOrder:Order = {
  //         userId: "651f79376b4dfe57ae74ad2e",
  //         productosId:products,
  //         total: this.totalCost
  //       }
  //       const orderCreated = await this.productosService.createOrder
  //     })
  //    }
  // }
}
