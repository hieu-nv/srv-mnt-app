import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'srv-mnt-app';

  exampleTextField = '';

  onClick() {
    console.log(this.exampleTextField);
  }
}
