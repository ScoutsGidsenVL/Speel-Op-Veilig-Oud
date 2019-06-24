import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-thema',
  templateUrl: './thema.page.html',
  styleUrls: ['./thema.page.scss'],
})
export class ThemaPage implements OnInit {
  private chapter;
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, public alertController: AlertController) { }

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title');
    this.chapter = this.dataService.getchapterBytitle(title);
    if (this.chapter == undefined) {
        this.router.navigateByUrl('/home');
    }
  }
  
  async presentAlert(why) {
    const alert = await this.alertController.create({
      header: 'Waarom?',
      message: why,
      buttons: ['OK']
    });

    await alert.present();
  }

}
