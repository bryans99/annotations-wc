import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';

const CLOSE_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;

@Component({
  selector: 'close-icon',
  templateUrl: './close-icon.component.html'
})
export class CloseIconComponent {
  @Input() label?: string

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('close', sanitizer.bypassSecurityTrustHtml(CLOSE_ICON));
  }
}
