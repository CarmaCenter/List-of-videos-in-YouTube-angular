import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { GetApiService } from '../../services/get-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataApi: Array<Item>;
  filteredString: string = '';
  constructor(private api: GetApiService) {}
  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      this.dataApi = data.items;
      console.log(data.items);
    });
  }
}
