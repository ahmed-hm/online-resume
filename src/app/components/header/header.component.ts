import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name: string;
  constructor(private readonly infoService: InfoService) {
    this.name = this.infoService.name;
  }

  toggleMenu(event: any): void {
    const menuIcon = event.target.closest('.header__links-mobile__toggle');
    const menu = document.querySelector('.header__links-mobile__container')!;
    menuIcon.classList.toggle('open');
    menu.classList.toggle('open');
  }
}
