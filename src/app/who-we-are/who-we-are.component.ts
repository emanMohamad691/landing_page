import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent {
   spanContent:string="نحن نبي لك المستقبل"
   h3Content:string="أكاديمية الذّكر لتعلم القرآن الكريم"
   paragraph1Content:string="أكاديمية الذّكر هي مؤسسة متخصصة في تحفيظ وتعليم القرآن وعلومه، يتولى ذلك نخبة من المتخصصين المجازين، وذلك مواصلة لتحقيق رسالتنا في تعليم القرآن الكريم وتسهيل ذلك للمسلمين في كل مكان بطريقة سهلة وبسيطة بمناهج صممت خصيصًا لأجلك."
   paragraph2Content:string="سنستهدف الراغبين في حفظ القرآن الكريم وتعلم علومه كافة أنحاء العالم “نساء – رجال – أطفال” انطلاقا من قول رسول الله صلى الله عليه وسلم (( خيركم من تعلم ًالقرآن وعلمه )) رواه البخاري يوجد حلقات تحفيظ القرآن عن بعد للرجال و للنساء والاطفال"
   div1Content:string="للمسلمين الجدد الذين يرغبون بتعلم الفاتحة وقصار السور."
   div2Content:string="الساعين حفظ القرآن، بمنهج واضح ومحدد لتيسير الحفظ والإتقان"
   div3Content:string="لتحسين تلاوة القرآن مع منهج بسيط للحفظ."
   div4Content:string="لمن حفظ القرآن ويسعى نحو تعلم التجويد"
   buttonContent:string="تعلم القران الكريم الان"

   constructor(private viewportScroller: ViewportScroller) {}

  scrollToTarget(target: string) {
    // Use the ViewportScroller to scroll to the target anchor
    const element = document.getElementById(target);
    if (element) {
      this.viewportScroller.scrollToAnchor(target);
    }}
  
}
