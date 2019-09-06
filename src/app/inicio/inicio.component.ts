import { Component, OnInit } from '@angular/core';
import { Hotel } from '../shared/Models/hoteles.model';
import { HotelService } from '../shared/hotel.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaHoteles: Hotel[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    
    this.getHoteles();
  }
  
  getHoteles(){
    this.hotelService.getHoteles().subscribe(result => {
      this.listaHoteles = result;
    });
  }
  
}
