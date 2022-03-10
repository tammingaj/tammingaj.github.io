import {Component} from '@angular/core';
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homepage';
  public faGithub = faGithub;
  public faStackOverflow = faStackOverflow;
  public faLinkedin = faLinkedin;

  constructor() {
  }

}
