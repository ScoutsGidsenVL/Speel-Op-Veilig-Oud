import { Component } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    
    public staticPages = [
        {
          title: 'Crisis en noodsituaties',
          url: '/crisis-en-noodsituaties',
        },
        {
          title: 'Wegwijs',
          url: '/wegwijs',
        },
        {
          title: 'Veilige activiteit',
          url: '/veilige-activiteit',
        },
        {
          title: 'Verzekeringen en aansprakelijkheid',
          url: '/verzekeringen-en-aansprakelijkheid',
        },
        {
          title: 'Vragen en Antwoorden',
          url: '/vragen-en-antwoorden',
        }
      ];

    public themas;    
    
    constructor(private dataService: DataService) { }

    
    
    
    ngOnInit() {
        this.themas = this.dataService.haalThemasOp();
    }
}
