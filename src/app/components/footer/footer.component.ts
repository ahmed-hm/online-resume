import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  github: string;
  linkedin: string;

  constructor(private readonly infoService: InfoService) {
    this.github = this.infoService.github;
    this.linkedin = this.infoService.linkedin;
  }
}
