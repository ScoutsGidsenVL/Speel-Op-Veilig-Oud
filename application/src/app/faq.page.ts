import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service'


@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  private filter = new Array('kapoenen-zeehondjes', 'kabouters-welpen', 'jonggidsen-verkenners-scheepsmakkers', 'gidsen-verkenners', 'jins-loodsen');
  private vragen;
  constructor( private dataService: DataService) {
      
  }

  ngOnInit() {
      this.vragen = this.dataService.haalAlleVragenOp();
  }
    
    filterTakken($event){
        if($event.detail.value.length == 0 ){
            this.filter = new Array('kapoenen-zeehondjes', 'kabouters-welpen', 'jonggidsen-verkenners-scheepsmakkers', 'gidsen-verkenners', 'jins-loodsen')
        } else {
            this.filter = $event.detail.value;
        }
    }
    
    isVoorTak(antwoord){
        if (this.filter.find(f => f == antwoord.tak)){
            return true;
        }
        return false;
    }
}
