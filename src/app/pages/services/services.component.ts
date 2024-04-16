import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { 
      image: "assets/extra-services-photos/service-gym.jpg", 
      title: "Palestra", 
      description: "Palestra në hotelin tonë është një nga shërbimet shtesë të cilat e bëjnë qëndrimin tuaj të jetë më tërheqës. Palestra ofron një përvojë të shkëlqyer për mysafirët tanë, duke u dhënë mundësinë për të vazhduar rutinën e tyre të ushtrimeve edhe gjatë udhëtimit. Me pajisjet e fundit dhe ambiente të përshtatshme për ushtrime të ndryshme, palestra e hotelit është një vend ideal për të mbajtur veten në formë dhe për të pasur një qëndrim të shëndetshëm. Për më tepër, stafi ynë i përkushtuar është aty për të ofruar ndihmë dhe këshilla për të siguruar që të gjithë mysafirët të kenë një përvojë të këndshme dhe të suksesshme gjatë përdorimit të palestrës.",
      price:"2000ALL"
    },
    { 
      image: "assets/extra-services-photos/service-pool.jpg", 
      title: "Pishina", 
      description: "Pishina në hotelin tonë është një prej shërbimeve shtesë që e bën qëndrimin tuaj të jetë edhe më i shkëlqyeshëm. Ky ambient ofron një përvojë unike për mysafirët tanë, duke u dhënë mundësinë për të shijuar freskinë dhe relaksimin në ujë. Me ujë të pastër dhe ambient tërheqës, pishina e hotelit është një zgjedhje ideale për t'u larguar nga stresi dhe për të rikuperuar energjinë. Stafi i përkushtuar është gjithmonë në shërbim, duke siguruar që vizitorët tanë të kenë një përvojë të këndshme dhe të sigurt në pishinën tonë.",
      price:"3000ALL"
    },
    { 
      image: "assets/extra-services-photos/service-restaurant.jpg", 
      title: "Restoranti", 
      description: "Restoranti ynë është një destinacion i veçantë për shije të mrekullueshme dhe përvoja kulinarisht të pasura për mysafirët tanë. Me një ambient të bukur dhe tërheqës, ai ofron një përvojë të këndshme gastronomike për të gjithë vizitorët. Gjithçka fillon me një gamë të gjerë të specialiteteve ushqimore, të përgatitura me kujdes dhe pasion nga kuzhinierët tanë të kualifikuar. Nga kuzhina tradicionale lokale deri te gatimet e ndryshme ndërkombëtare, çdo vakt është një udhëtim i vërtetë për shijen. Përveç shijes së shkëlqyeshme, restoranti ynë ofron një ambient të këndshëm dhe të relaksuar, ku mysafirët mund të shijojnë ushqimin e tyre në shoqërinë e miqve dhe të familjes.", 
      price:"6000ALL"
    },
    { 
      image: "assets/extra-services-photos/service-spa.jpg",
      title: "SPA", 
      description: "Spa e hotelit tonë është një oaz i qetësisë dhe relaksimit, ofrojnë një përvojë të shkëlqyer të kujdesit të trupit dhe shpirtit për mysafirët tanë. Me ambientin e saj të harmonishëm dhe tërheqës, Spa jonë ofron një rrugë të shkëlqyer për të shpëtuar nga stresi i ditës së përditshme dhe për të rindërtuar energjinë. Palestra e Spa-s ofron një gamë të gjerë trajnimesh dhe aktivitetesh, duke përfshirë masahe relaksuese, trajtime të fytyrës dhe trupit, si dhe përdorimin e ambienteve të saunës dhe të banjës turke. Me produkte të kujdesit të lartë për të gjitha llojet e lëkurës, spa jonë garanton një përvojë të këndshme dhe të relaksuar për të gjithë vizitorët tanë. ", 
      price:"5000ALL"
    }
  ];
}
