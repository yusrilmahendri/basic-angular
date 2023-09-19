import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-angular';
  jumlah = 10;
  harga = 4000;
  topic = 'how to learning angular';
  public message = 'from parent this app component, this learn component interactively';
  public pesan = '';
  //object 
  name = {
    nameDepan: 'Yusril', 
    namaBelakang: 'Mahendri',
    age: 24,
  };
   //array 
    randomValue = [
      1, 2, 3, 4, 5, 6, 7,
    ];
}
