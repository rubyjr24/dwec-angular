import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../pipes/product-filter-pipe';

@Component({
  selector: 'app-product-list',
  imports: [NgClass, FormsModule, ProductFilterPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  title = 'Mi lista de productos';
  headers = { image: 'Imagen', desc: 'Producto', price: 'Precio', avail: 'Disponible' };
  products: IProduct[] = [
    {
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: '/ssd.jpeg',
      rating: 5,
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: '/placa.jpeg',
      rating: 4,
    },
  ];
  showImage = true;
  filterSearch: string = '';

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
