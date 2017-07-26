import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = ''

  checkEmptyName() {
    return (this.userName === '')
  }

  resetField() {
    this.userName = ''
  }

  ngOnInit() {

  }
}
