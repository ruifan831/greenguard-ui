import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ResizeListenerService } from '../../services/resize-lisenter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  width: number = 0;
  height: number = 0;
  isMenuOpen = false;
  smallScreen = false;
  @ViewChild('menuIcon') menuIconRef!: ElementRef;

  constructor(
    private resizeService: ResizeListenerService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.resizeService.resize$.subscribe((size) => {
      this.width = size.width;
      this.height = size.height;
      console.log(
        `Parent Component - Width: ${this.width}, Height: ${this.height}`
      );
    });
    this.resizeService.smallScreen$.subscribe((smallScreen) => {
      this.smallScreen = smallScreen;
    });
  }

  get menuMode() {
    if (this.width <= 576) {
      return 'inline';
    } else {
      return 'horizontal';
    }
  }

  // Toggle the menu open/close
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onNavigate(){
    this.isMenuOpen = false;
  }

  // Detect click outside the menu to close it
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isMenuOpen = false;
    }
  }
}
