import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './b-login.component.html',
  styleUrl: './b-login.component.css'
})
export class BLoginComponent {

  businesslist:string[] = [];
  name = '';
  mob = 0;
  email = '';

  submit(){

    if(this.name.trim()){
      this.businesslist.push(this.name);
      this.name = '';
    }
  }
}
