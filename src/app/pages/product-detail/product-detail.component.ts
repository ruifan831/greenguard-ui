import { Component, model, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DroneDataService } from '../../services/drone-data.service';
import { DroneModel } from '../../services/drone-model-schema';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productName: string | null = '';
  isDark:boolean = true;
  droneDetail?: DroneModel;
  @ViewChild('mainVideoElement') mainVideoElement: any; // Reference to the video element
  @ViewChild('detailVideoElement') detailVideoElement: any; // Reference to the video element
  constructor(private route: ActivatedRoute,
    private droneService: DroneDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const modelName = params.get('droneModel');
      if (modelName) {
        this.fetchDroneDetails(modelName)
      }
    });
  }

  // Fetch drone details from the service and reset the video
  fetchDroneDetails(modelName: string): void {
    // Get the drone details from the service
    this.droneDetail = this.droneService.getDroneDetailsByName(modelName);
    if (this.droneDetail){
      this.isDark = this.droneDetail.dark;
      // If a video element is available, reset its source to trigger reload
      if (this.mainVideoElement) {
        
        this.mainVideoElement.nativeElement.src = this.droneDetail.main_video_src;
        this.mainVideoElement.nativeElement.load(); // Reload the video
        this.mainVideoElement.nativeElement.play(); // Optionally start the video automatically
      }

      if (this.detailVideoElement) {
        this.detailVideoElement.nativeElement.src = this.droneDetail.model_detail_video_src;
        this.detailVideoElement.nativeElement.load(); // Reload the video
        this.detailVideoElement.nativeElement.play(); // Optionally start the video automatically
      }

    }
  }

}
