import { Component, HostListener } from '@angular/core';
import { NzJustify } from 'ng-zorro-antd/flex';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  social_icon_justify: NzJustify = 'flex-end'
  copyright_flex_gap:number = 24;
  @HostListener('window:resize', ['$event'])
  onWindowResize(){
    console.log(window.innerWidth)
    if (window.innerWidth <=576){
      this.social_icon_justify = 'flex-start'
      this.copyright_flex_gap = 12;
    } else {
      this.social_icon_justify = 'flex-end'
      this.copyright_flex_gap = 24;
    }
  }
}
