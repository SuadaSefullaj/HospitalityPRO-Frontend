import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms = [
    { 
      image: "assets/room-photos/standart-room.jpg", 
      title: "Dhomat Standarte", 
      description: "Dhomat standarte të hotelit ofrojnë një përvojë të këndshme dhe të rehatshme për udhëtarët, duke përfshirë këto pikat:Shtratët e rehatshëm për një gjumë të kualitetit.Banjë private me pajisje moderne.Ambient i dritës natyrale për një atmosferë të mërkur.Pajisje moderne për të plotësuar nevojat e udhëtarëve.Akses në internet Wi-Fi falas.Shërbim dhomash nën kërkesë për të përmbushur nevojat tuaja të veçanta." ,
      capacity:"1-2 persona",
      bedType:"standart",
      price:"1000ALL",
      features:"Free WIFILiving areaComplimentary WaterMake up DeskFlat Screen TVIn Room SafeMinibarBathtub and/or Shower"
    },
    { 
      image: "assets/room-photos/family-room.jpg", 
      title: "Dhomat Familjare", 
      description: "Dhomat familjare të hotelit ofrojnë një përvojë të rehatshme dhe të përshtatshme për familjet dhe grupet e mëdha. Këto dhoma janë të dizajnuara për të siguruar hapësirë ​​dhe komoditet për të gjithë anëtarët e familjes. Pajisjet moderne dhe dizajni i kujdesshëm e bëjnë qëndrimin tuaj të jetë sa më i këndshëm. Pikat e rëndësishme për dhomat familjare përfshijnë:Shtratët e rehatshëm dhe hapësira të mjaftueshme për të gjithë anëtarët e familjes.Banjë private me pajisje moderne, për të siguruar privatësi dhe komoditet.Ambient i dritës natyrale dhe dizajn i kujdesshëm për një atmosferë të mrekullueshme.Pajisje moderne për të përmbushur nevojat e të gjithë anëtarëve të familjes.Akses në internet Wi-Fi falas për të qëndruar të lidhur me botën.Shërbim dhomash nën kërkesë për të plotësuar nevojat e veçanta të familjes suaj gjatë qëndrimit.", 
      capacity:"1-2 persona",
      bedType:"standart",
      price:"1000ALL",
      features:"Free WIFILiving areaComplimentary WaterMake up DeskFlat Screen TVIn Room SafeMinibarBathtub and/or Shower"
    },
    { 
      image: "assets/room-photos/suites-room.jpg", 
      title: "Suita", 
      description: "Suitat e hotelit ofrojnë një përvojë të ekskluzivitetit dhe luksit për udhëtarët. Këto ambientet janë të dizajnuara për të ofruar një qëndrim të paharrueshëm, duke kombinuar elegancën me komfortin. Pajisjet dhe detajet e veçanta e bëjnë qëndrimin tuaj të jetë një përvojë e jashtëzakonshme. Pikat e rëndësishme për suitat përfshijnë: Ambienti i gjerë dhe komod për të qëndruar dhe relaksuar. Dhoma gjumi të pajisura me shtratët më të rehatshme për një gjumë të shkëlqyeshëm. Banjë private me dizajn të rafinuar dhe pajisje të larta.Detajet e veçanta dhe dekorimi i kujdesshëm për të krijuar një atmosferë elegante. Pajisje të larta teknologjike dhe shërbime shtesë për të plotësuar nevojat tuaja.Privilegji dhe shërbim i personalizuar për një përvojë të paharrueshme në hotel." ,
      capacity:"1-2 persona",
      bedType:"standart",
      price:"1000ALL",
      features:"Free WIFISeparate Living Room and BedroomFlat Screen TVNespresso Coffee MachineMinibarShower"
    },
    { 
      image: "assets/room-photos/vip-room.jpg", 
      title: "Dhomat VIP", 
      description: "Suitat e hotelit ofrojnë një përvojë të ekskluzivitetit dhe luksit për udhëtarët. Këto ambientet janë të dizajnuara për të ofruar një qëndrim të paharrueshëm, duke kombinuar elegancën me komfortin. Pajisjet dhe detajet e veçanta e bëjnë qëndrimin tuaj të jetë një përvojë e jashtëzakonshme. Pikat e rëndësishme për suitat përfshijnë:Ambienti i gjerë dhe komod për të qëndruar dhe relaksuar.Dhoma gjumi të pajisura me shtratët më të rehatshme për një gjumë të shkëlqyeshëm.Banjë private me dizajn të rafinuar dhe pajisje të larta.Detajet e veçanta dhe dekorimi i kujdesshëm për të krijuar një atmosferë elegante.Pajisje të larta teknologjike dhe shërbime shtesë për të plotësuar nevojat tuaja.Privilegji dhe shërbim i personalizuar për një përvojë të paharrueshme në hotel." ,
      capacity:"1-2 persona",
      bedType:"standart",
      price:"1000ALL",
      features:"Free WIFILiving areaComplimentary WaterMake up DeskFlat Screen TVIn Room SafeMinibarBathtub and/or Shower"
    }
  ];
}
