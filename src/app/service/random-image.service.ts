import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {

  constructor(private http: HttpClient) {
  }

  getRandomImages(): Observable<any> {
    return this.http.get('./test-data.json');
  }
}
