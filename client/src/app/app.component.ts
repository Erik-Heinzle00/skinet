import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { ShopComponent } from "./features/shop/shop.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ShopComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'Skinet';
}
