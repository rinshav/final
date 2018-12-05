import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../components/product-lists/product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productItem= new IProduct(null,null,null,null,null,null,null,null);

  ngOnInit() {}
  
   Addproduct(){
  
        this.productService.newProduct(this.productItem);
       alert("success");
   }

}
