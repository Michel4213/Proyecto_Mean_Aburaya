export interface Order {
    userId: string;
    productosId: Array<{
        productId:string;
        talla:string;
    }>
    total: number;
}

export interface SelectedSize{
    tallas: string;
    productId: string;
}

export interface ProductAdded{
    _id: string;
    tipo: string;
    diseno: string;
    color: string;
    precio: number;
    talla: string;
    img2: string;
}