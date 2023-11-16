import { Component } from '@angular/core';
import { faPhoneVolume,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faInstagram,faFacebookF} from "@fortawesome/free-brands-svg-icons"
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
h3Content:string="هل أنت مستعد للبدء؟"
faPhoneVolume=faPhoneVolume
faInstagram=faInstagram
faFacebookF=faFacebookF
faEnvelope=faEnvelope
}
