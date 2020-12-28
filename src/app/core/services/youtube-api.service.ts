import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private API_URL = environment.youtubeApi.url;
  private API_TOKEN = environment.youtubeApi.apiKey;

  constructor(private http: HttpClient) { }

  getVideos(query: string): Observable <any> {
    // const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    const url = '';
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }
}
