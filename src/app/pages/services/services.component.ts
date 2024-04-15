import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { 
      image: "assets/extra-services-photos/gym.jpg", 
      title: "Dhomat Standarte", 
      description: "Një oaz modern, ku luksin dhe kujdesin për detaje i kombinojmë për të ofruar një përvojë të pazëvendësueshme." 
    },
    { 
      image: "assets/extra-services-photos/pool.jpg", 
      title: "Dhomat Familjare", 
      description: "Një vënd i shkëlqyer ku çdo detaj është harmonizuar për të krijuar një përvojë të mahnitshme për vizitorët tanë." 
    },
    { 
      image: "assets/extra-services-photos/restaurant.jpg", 
      title: "Suita", 
      description: "Një vënd i shkëlqyer ku çdo detaj është harmonizuar për të krijuar një përvojë të mahnitshme për vizitorët tanë." 
    },
    { 
      image: "assets/extra-services-photos/spa.jpg", 
      title: "Dhomat VIP", 
      description: "Një vënd i shkëlqyer ku çdo detaj është harmonizuar për të krijuar një përvojë të mahnitshme për vizitorët tanë." 
    }
  ];
}
