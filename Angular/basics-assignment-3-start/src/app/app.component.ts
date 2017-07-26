import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hidden = false;
  log = [];

  getDisplay() {
    return this.hidden === true ? 'none' : 'block';
  }

  onClickButton() {
    this.hidden = !this.hidden;
    this.log.push(new Date());
  }
}
