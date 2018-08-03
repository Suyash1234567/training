import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTraining]'
})
export class TrainingDirective {

  constructor(private ref : ElementRef) {
  
   }
   @Input() userColor : string;

   @HostListener ('mouseenter') mouseEnterCallBack(){
     this.changeColor(this.userColor)
   }
   @HostListener ('mouseleave') mouseLeaveCallBack(){
    this.changeColor('yellow')
  }
   changeColor(color :any){
     this.ref.nativeElement.style.color = color
   }

}
