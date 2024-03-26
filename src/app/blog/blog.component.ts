import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  implements OnInit {
  products: any = {}; // Initialize the property as an object
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getiteams().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
}
}
