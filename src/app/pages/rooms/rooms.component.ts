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
      description: "Dhomat standarte të hotelit ofrojnë një përvojë të mrekullueshme për udhëtarët, duke u përpjekur të sigurojnë një ambient të rehatshëm dhe të këndshëm për të gjithë vizitorët. Me pajisje të fundit për të plotësuar nevojat e udhëtarëve, përfshirë aksesin në internet Wi-Fi falas dhe shërbimin e dhomave nën kërkesë për të përmbushur nevojat e veçanta të çdo vizitori, këto dhoma janë një zgjedhje e shkëlqyer për udhëtimin tuaj." ,
      capacity:"1-2 persona",
      bedType:"Standart",
      price:"4000ALL",
      features:"Free WIFI  · Complimentary Water  · Flat Screen TV  · Shower"
    },
    { 
      image: "assets/room-photos/family-room.jpg", 
      title: "Dhomat Familjare", 
      description: "Dhomat familjare në hotel ofrojnë një përvojë të shkëlqyer për familjet dhe grupet e mëdha. Me hapësirë më të gjerë dhe shtratë të rehatshëm për të gjithë, qëndrimi bëhet më komod. Banjat private dhe dizajni i kujdesshëm krijojnë një ambient të mrekullueshëm, ndërsa pajisjet moderne dhe akses Wi-Fi falas sigurojnë komoditet dhe lidhje të shpejtë me internetin.", 
      capacity:"2-4 persona",
      bedType:"Dopio",
      price:"9000ALL",
      features:"Free WIFI · Complimentary Water · Flat Screen TV · Shower"
    },
    { 
      image: "assets/room-photos/suites-room.jpg", 
      title: "Suita", 
      description: "Suitat e hotelit ofrojnë një përvojë të ekskluzivitetit dhe luksit për udhëtarët. Këto ambiente janë të dizajnuara për të kombinuar elegancën me komfortin, duke ofruar një qëndrim të paharrueshëm. Me hapësira të gjerë dhe detaje të veçanta, qëndrimi juaj bëhet një përvojë e jashtëzakonshme. Dhoma gjumi ofron shtratë të rehatshme për një gjumë të shkëlqyeshëm, ndërsa banjat private janë të dizajnuara me stil dhe pajisje të larta. Detajet e veçanta dhe dekorimi i kujdesshëm krijojnë një atmosferë elegante. Pajisjet teknologjike dhe shërbimet shtesë plotësojnë nevojat tuaja për një qëndrim të pamohueshëm, duke ofruar privilegjin dhe shërbimin personalizuar për një përvojë të paharrueshme në hotel." ,
      capacity:"2-3 persona",
      bedType:"Queen",
      price:"1200ALL",
      features:"Free WIFI ·Living Room · Flat Screen TV · Coffee Machine · Minibar ·Shower"
    },
    { 
      image: "assets/room-photos/vip-room.jpg", 
      title: "Dhomat VIP", 
      description: "Dhomat VIP në hotel janë shembuj shkëlqimi dhe elegancës. Ata ofrojnë një përvojë të shkëlqyer që tejkalon pritshmëritë e një qëndrimi të zakonshëm në hotel. Me hapësira të gjerë dhe dizajn të mrekullueshëm, këto dhoma janë një përfaqësim i luksit dhe komoditetit. Përveç kësaj, ato janë të pajisura me pajisje të fundit teknologjike, duke përfshirë kontrollin e dritës, audio dhe video. Shërbimi personalizuar është një tjetër karakteristikë e rëndësishme e dhomave VIP, duke u siguruar që udhëtarët të kenë një përvojë të jashtëzakonshme dhe të paharrueshme gjatë qëndrimit në hotel." ,
      capacity:"2-3 persona",
      bedType:"King",
      price:"2500ALL",
      features:"Free WIFI · Living area · Make up Desk · Flat Screen TV · Personal Bar · Bathtub · Butler Team"
    }
  ];
}
