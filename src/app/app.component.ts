import { Component } from '@angular/core';
import { ToolbarButtonComponent, ToolbarComponent } from '@ui5/webcomponents-ngx';

@Component({
  selector: 'app-root',
  imports: [
    ToolbarComponent,
    ToolbarButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui5-jest-reprod';
}
