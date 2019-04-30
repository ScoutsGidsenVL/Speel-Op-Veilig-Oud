import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service'

@Component({
  selector: 'app-thema',
  templateUrl: './thema.page.html',
  styleUrls: ['./thema.page.scss'],
})
export class ThemaPage implements OnInit {
  private chapter;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title');
    this.chapter = this.dataService.getchapterBytitle(title);
  }

}
