import { Component, OnInit, Output } from '@angular/core';
import { ProductAdded, SelectedSize } from 'src/app/interface/order.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products1',
  templateUrl: './products1.component.html',
  styleUrls: ['./products1.component.css']
})
export class Products1Component {

  arrProducts: any[] = [];
  cartList: Array<any> = [];
  totalCost: number = 0;
  selectedSize: SelectedSize| null = null;

  constructor(private productosService: ProductsService) { }

  async ngOnInit() {
    try {
      const productos = await this.productosService.traerTodo();
      this.arrProducts = productos;
      console.log(productos);
    } catch (error) {
      console.error('Error al obtener los productos', error);
    }
  }



  addtoCart(product: any) {
    if (this.selectedSize !== null){
      const selectedProduct:ProductAdded = {
        _id:product._id, 
        tipo:product.tipo,
        diseno:product.diseno,
        color:product.color,
        precio:product.precio,
        talla:this.selectedSize.tallas,
        img2:product.img2
      }
      this.cartList.push(selectedProduct)
      this.totalCost = this.cartList.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue.precio
      }, 0)
    }
  }

  addSelectedSize(talla: string, productId:string){
    this.selectedSize={
      tallas:talla, productId:productId
    }
  }
  
}

