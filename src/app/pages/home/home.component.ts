import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    { 
      image: "assets/hotelPhoto2.jpg", 
      title: "Mirësevini në HospitalityPRO", 
      description: "Një oaz modern, ku luksin dhe kujdesin për detaje i kombinojmë për të ofruar një përvojë të pazëvendësueshme." 
    },
    { 
      image: "assets/hotelPhoto1.jpeg", 
      title: "Rezervoni qëndrimin tuaj", 
      description: "Një vënd i shkëlqyer ku çdo detaj është harmonizuar për të krijuar një përvojë të mahnitshme për vizitorët tanë." 
    }
  ];
    rooms = [
      { name: "Dhomat Standarte", price: "4000-8000 ALL", image: "assets/room-photos/standart-room.jpg" },
      { name: "Suitat", price: "12000-18000 ALL", image: "assets/room-photos/suites-room.jpg" },
      { name: "Dhomat Famijlare", price: "9000-15000 ALL", image: "assets/room-photos/family-room.jpg" },
      { name: "Dhomat VIP", price: "25000-45000 ALL", image: "assets/room-photos/vip-room.jpg" }
    ];

    extraServices = [
      { name: "Palestra", image: "assets/extra-services-photos/gym.jpg" },
      { name: "Pishina", image: "assets/extra-services-photos/pool.jpg" },
      { name: "Restorant", image: "assets/extra-services-photos/restaurant.jpg" },
      { name: "SPA", image: "assets/extra-services-photos/spa.jpg" }
    ];
  }

