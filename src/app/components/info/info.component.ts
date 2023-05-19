import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  name: string;
  title: string;
  github: string;
  linkedin: string;

  constructor(private readonly infoService: InfoService) {
    this.name = this.infoService.name;
    this.title = this.infoService.title;
    this.github = this.infoService.github;
    this.linkedin = this.infoService.linkedin;
  }

  downloadResume(): void {
    window.open('assets/files/ahmed-hamdy-resume.pdf', '_blank');
  }
}
