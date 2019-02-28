import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  private filter;
  constructor() { }

  ngOnInit() {
  }
    
    filterTakken($event){
        console.log($event.detail.value);
    }
}
