import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from 'src/app/services/get-api.service';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  videoId: any;
  video: any;
  dataApi: Array<Item>;
  constructor(private api: GetApiService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      this.videoId = this.route.snapshot.paramMap.get('id');
      this.dataApi = data.items;
      console.log(data);
      console.log(this.videoId);
      this.video = this.dataApi[this.videoId];
    });
  }
}
