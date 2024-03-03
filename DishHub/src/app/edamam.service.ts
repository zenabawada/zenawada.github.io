import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdamamService {
  // private apiUrl = 'https://api.edamam.com/api/recipes/v2';
  // private apiUrl = 'https://api.edamam.com/search';
  private apiUrlBase = 'https://api.edamam.com/search?app_id=ec56812c&app_key=73e40813c042d5e47f06179411dafc87';

  constructor(private http: HttpClient) { }

  searchRecipes(query: string, dietType: string): Observable<any> {
    let apiUrl = `${this.apiUrlBase}&q=${query}`;
    if (dietType) {
      apiUrl += `&diet=${dietType}`
    }
    return this.http.get<any>(apiUrl);
  }
}
