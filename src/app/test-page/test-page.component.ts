import { Component, OnInit } from '@angular/core';
import { httpService } from 'http-service.service';
import { TransferState, makeStateKey } from "@angular/core";

const pd_STREET_DETAILS = makeStateKey("pd-properties");



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {

  constructor(private http: httpService, private state: TransferState){}


  ngOnInit(): void {


    const state = this.state.get(pd_STREET_DETAILS, <any>{})

    console.log('reading state', state);




    this.slowFunction();
  }

  slowFunction() {

    setTimeout(() => {

      this.http.getJSON("https://dummyjson.com/products/1").subscribe((res) => {

      console.log('setting state', res);


      this.state.set(pd_STREET_DETAILS, <any>res)

      return;


    })
    }, 1000);


  }

}
