import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service'


@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  private filter = new Array('kapoenen-zeehondjes', 'kabouters-welpen', 'jonggidsen-verkenners-scheepsmakkers', 'gidsen-verkenners', 'jins-loodsen');
  private questions;
  constructor( private dataService: DataService) {
  }

  ngOnInit() {
      console.log(this.dataService.getAllQuestions());
      this.questions = this.dataService.getAllQuestions();
  }
    
    filterGroups($event){
        if($event.detail.value.length == 0 ){
            this.filter = new Array('kapoenen-zeehondjes', 'kabouters-welpen', 'jonggidsen-verkenners-scheepsmakkers', 'gidsen-verkenners', 'jins-loodsen')
        } else {
            this.filter = $event.detail.value;
        }
    }
    
    checkGroupFilter(answer) {
        if (this.filter.find(f => f == answer.group)){
                return true;
            }
            return false;
        }
}
