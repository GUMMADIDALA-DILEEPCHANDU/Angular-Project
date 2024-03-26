// Import OnInit from @angular/core
import { Component, OnInit } from '@angular/core';

// Import ProductService from '../product.service'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  products: any[] = []; // Initialize the property

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => { // Remove array type
      this.products = data.products; // Access the 'products' property
      console.log(this.products); // Log the products data
    });
  }
}
