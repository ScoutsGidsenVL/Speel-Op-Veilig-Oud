import { Component } from '@angular/core';

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
        }
      ];

    public themas = [
        {
            title: 'Vuur',
            url: '/themas/vuur',
        },
        {
            title: 'Water',
            url: '/themas/water',
        },
        {
            title: 'Hoogte',
            url: '/themas/hoogte',
        },
        {
            title: 'Materiaal',
            url: '/themas/materiaal',
        },
        {
            title: 'Verkeer',
            url: '/themas/verkeer',
        },
        {
            title: 'Drugs, tabak en alcohol',
            url: '/themas/drugs-tabak-en-alcohol',
        },
        {
            title: 'Welzijn',
            url: '/themas/welzijn',
        },
        
        
    ]
}
