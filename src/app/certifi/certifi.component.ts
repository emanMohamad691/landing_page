import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-certifi',
  templateUrl: './certifi.component.html',
  styleUrls: ['./certifi.component.css']
})
export class CertifiComponent implements AfterViewInit{
  ngAfterViewInit() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      
    });
  }
  spanContent:string="شهادات"
  h2Content:string="شهادات لبعض الطلاب"
  paraContent:string="تسر إدارة أكاديمية الذّكر لتحفيظ القرءان أن تتقدم بخالص التهاني الي كل الطلاب"

 
}
