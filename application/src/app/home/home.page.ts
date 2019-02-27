import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    public appPages = [
        {
          title: 'Crisis en noodsituaties',
          url: '/crisis-en-noodsituaties',
          icon: 'home'
        },
        {
          title: 'Wegwijs',
          url: '/wegwijs',
          icon: 'list'
        },
        {
          title: 'Veilige activiteit',
          url: '/veilige-activiteit',
          icon: 'list'
        },
        {
          title: 'Verzekeringen en aansprakelijkheid',
          url: '/verzekeringen-en-aansprakelijkheid',
          icon: 'list'
        }
      ];
}
