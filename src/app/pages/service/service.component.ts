import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmServiceService, ServiceDetail } from '../../services/farm-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent implements OnInit {
  serviceType: string = '';
  currentService?: ServiceDetail;

  constructor(
    private route: ActivatedRoute,
    private farmService: FarmServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceType = params['serviceType'];
      this.currentService = this.farmService.getServiceDetail(this.serviceType);
    });
  }
}
