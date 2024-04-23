import { Component } from '@angular/core';
import { ExtraService } from 'src/app/models/extra-service';
import { ExtraServiceService } from 'src/app/services/Extra-Service/extra-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  extraServices: ExtraService[]=[];
  selectedService!: ExtraService;

  constructor(private extraServiceService: ExtraServiceService) { }

  ngOnInit(): void {
    this. getAllExtraService();
  }

  getAllExtraService(): void {
    this.extraServiceService.getAllExtraService()
      .subscribe(extraServices => this.extraServices = extraServices);
  }

  getExtraServiceById(id: number): void {
    this.extraServiceService.getExtraServiceById(id)
      .subscribe(extraService => this.selectedService = extraService);
  }
  servicesImages = [
    "assets/extra-services-photos/service-gym.jpg", 
    "assets/extra-services-photos/service-pool.jpg", 
    "assets/extra-services-photos/service-restaurant.jpg", 
    "assets/extra-services-photos/service-spa.jpg",
  ];
}
