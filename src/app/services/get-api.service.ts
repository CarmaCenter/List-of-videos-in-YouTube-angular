import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetApiService {
  constructor(private http: HttpClient) {}
  apiCall(): Observable<any> {
    return this.http.get(
      'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=100&playlistId=PLp50dWW_m40XgTvxNoxddGkir5kSpFFmK&key=AIzaSyCACbDc1QZudRf6M2vBl1AGQ_4vxQSDHKI'
    );
  }
  search(data) {
    return data;
  }
}
