import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-thema',
  templateUrl: './thema.page.html',
  styleUrls: ['./thema.page.scss'],
})
export class ThemaPage implements OnInit {
  private chapter;
  constructor(private route: ActivatedRoute, private dataService: DataService, public alertController: AlertController) { }

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title');
    this.chapter = this.dataService.getchapterBytitle(title);
  }
  
  async presentAlert(why) {
    const alert = await this.alertController.create({
      header: 'Waarom?',
      message: why,
      buttons: ['OK']
    });

    await alert.present();
  }

  lastLetter(name: any) {
   if(name!= undefined){
    return name.charAt(name.length -1);
   }
  }
  subitemAndWhy(item, why){
   
    if(why != undefined){
      console.log( item + '<ion-icon name="help-circle" (click)="presentAlert('+why+')"></ion-icon>')
      return item + '<ion-icon name="help-circle" (click)="presentAlert('+why+')"></ion-icon>'
    }
    return item
  }
}
