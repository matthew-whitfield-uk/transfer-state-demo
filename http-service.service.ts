import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: "any",
})
export class httpService {
  prefix: string = "";



  constructor(private http: HttpClient) {}

  getJSON(url: string): Observable<any> {
    return this.http
        .get(url, {
          responseType: "json",

        })
  }


}
