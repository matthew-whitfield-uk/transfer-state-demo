import { Component, OnInit } from '@angular/core';
import { httpService } from 'http-service.service';
import { TransferState, makeStateKey } from '@angular/core';

const SYNC_KEY = makeStateKey('sync-state-key');
const ASYNC_KEY = makeStateKey('async-state-key');

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  constructor(private http: httpService, private state: TransferState) {}

  ngOnInit(): void {
    // getting the state of a syncronous state set and logging it - working

    const sync = this.state.get(SYNC_KEY, <any>{});

    console.log('Sync transfer state key', sync);

    // getting the state of a asyncronous HTTP request

    const async = this.state.get(ASYNC_KEY, <any>{});

    console.log('Async HTTP transfer state key', async);

    this.setServerStates();
  }

  setServerStates() {
    // testing a normal transfer state syncronously

    this.state.set(SYNC_KEY, <any>1234);

    // testing an async http request

    this.http.getJSON('https://dummyjson.com/products/1').subscribe((res) => {
      console.log('state that should be transferred', res);
      this.state.set(ASYNC_KEY, <any>res);
    });
  }
}
