import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service'

@Component({
  selector: 'app-thema',
  templateUrl: './thema.page.html',
  styleUrls: ['./thema.page.scss'],
})
export class ThemaPage implements OnInit {
  private thema;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    let titel = this.route.snapshot.paramMap.get('titel');
    this.thema = this.dataService.haalThemaOpMetTitel(titel);
    console.log(this.thema);
  }

}
