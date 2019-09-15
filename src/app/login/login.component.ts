import { Component, OnInit } from '@angular/core';
import { 
  faCoffee, faQuestionCircle, faUser, faLock, faEye, faEnvelope, faMapMarkerAlt, faQrcode
   } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent implements OnInit {
  faCofee = faCoffee;
  faQuestion = faQuestionCircle;
  faUser = faUser;
  faLock = faLock;
  faEye = faEye;
  faEnvelope = faEnvelope;
  faPin = faMapMarkerAlt;
  faQR = faQrcode;

  constructor() { }

  ngOnInit() {
  }

}