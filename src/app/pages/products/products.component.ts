import { Component } from '@angular/core';
import { DroneDataService } from '../../services/drone-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  drones: string[] = ['t50', 't25', 'mavic_3_m'];

  constructor(private droneService: DroneDataService) {}

  getDroneData(model: string) {
    return this.droneService.getDroneDetailsByName(model);
  }
}
