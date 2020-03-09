import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router ,private storage: Storage) { 
  }

  ngOnInit() {
    this.storage.get('read').then((read) => {
      if(read){
        this.router.navigateByUrl('/home');
      }
    });
  }
    
  gaDoor() {
      this.storage.set('read', true);
      this.router.navigateByUrl('/home'); 
  }

}
