import { Component, Input, OnInit } from '@angular/core';
import { DroneModel } from '../../services/drone-model-schema';
import { DroneDataService } from '../../services/drone-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input() model: string = '';
  droneData?: DroneModel;

  constructor(private droneService: DroneDataService) {}

  ngOnInit() {
    this.droneData = this.droneService.getDroneDetailsByName(this.model);
  }

  getImageSource(): string {
    const imageMap: { [key: string]: string } = {
      't50': '/assets/dji-agras-t50.webp',
      't25': '/assets/dji-agras-t25.webp',
      'mavic_3_m': '/assets/dji-mavic-3m.png'
    };
    return imageMap[this.model] || '';
  }
}
