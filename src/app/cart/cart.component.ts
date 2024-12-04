import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, FormsModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  shippingFrequency: number = 1;

  increaseQuantity() {
    this.shippingFrequency++;
  }

  decreaseQuantity() {
    if (this.shippingFrequency > 1) {
      this.shippingFrequency--;
    }
  }
}
