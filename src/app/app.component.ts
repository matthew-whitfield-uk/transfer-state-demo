import { Component, OnInit } from '@angular/core';
import { httpService } from 'http-service.service';
import { TransferState, makeStateKey } from "@angular/core";

const pd_STREET_DETAILS = makeStateKey("pd-properties");




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'transfer-state-demo';


}
