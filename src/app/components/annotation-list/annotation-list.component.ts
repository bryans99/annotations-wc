import { Component, Input } from '@angular/core';
import { AnnotationDataService } from '../../services/annotation-data.service';

@Component({
  selector: 'annotation-list',
  templateUrl: './annotation-list.component.html',
  styleUrl: './annotation-list.component.scss'
})
export class AnnotationListComponent {

  constructor(public annotationDataService: AnnotationDataService) {}

  close() {
    const ce = new CustomEvent('MFE_ANNOTATIONS_CLOSE', {});
    window.dispatchEvent(ce);
  }
}
