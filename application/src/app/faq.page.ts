import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service'


@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  private originalFilter = {"kapoenen-zeehondjes": "Kapoenen en zeehondjes",
        "kabouters-welpen": "Kabouters en (zee)welpen",
        "jonggidsen-jongverkenners-scheepsmakkers": "Jonggidsen, jongverkenners en scheepsmakkers",
        "gidsen-verkenners": "Gidsen en (zee)verkenners", 
        "jins-loodsen":"Jins en loodsen",
        "open-kamp": "Open kamp",
        "akabe": "Akabe",
        "leiding":"leiding"};
  private filterArr = new Array(
        "kapoenen-zeehondjes",
        "kabouters-welpen",
        "jonggidsen-jongverkenners-scheepsmakkers",
        "gidsen-verkenners", 
        "jins-loodsen",
        "open-kamp",
        "akabe",
        "leiding");
  private filter;
  private questions;
  constructor( private dataService: DataService) {
  }

  ngOnInit() {
      this.questions = this.dataService.getAllQuestions();
      this.filter = this.originalFilter;
      var url = new URL(window.location.href);
      var urlTheme = url.searchParams.get("theme");
      if(urlTheme){
        this.questions = new Array();
        this.questions.push( this.dataService.getQuestionsByTheme(urlTheme));
      }

  }
    
    filterGroups($event){
        if($event.detail.value.length == 0 ){
            this.filter = this.originalFilter;
        } else {
            //clear filter 
            this.filter = {};
            $event.detail.value.forEach( value => {
                this.filter[value] = this.originalFilter[value];
            })
        }
    }
    
    checkGroupFilter(answer) {
            if (this.filter[answer.group] != undefined) {
                return true;
            }
            return false;
        }
    countKeysInFilter() {
        return Object.keys(this.filter).length;
    }
}
