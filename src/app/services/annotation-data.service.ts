import { Injectable } from '@angular/core';

export interface Annotation {
  body: string;
  openFromStart: boolean;
  title?: string;
  displayLocation: 'above' | 'below';
  targetUsers?: string;
  id?: string;
  lastUpdated: string;
}

const SAMPLE_ANNOTATION_WITHOUT_TITLE: Annotation = {
  body: 'Filtering using days will give you the most granular results. Anything more will be confusing to read.',
  displayLocation: 'below',
  openFromStart: false,
  lastUpdated: '2023-04-14T21:33:25.000+00:00'

};

const SAMPLE_ANNOTATION: Annotation = {
  ...SAMPLE_ANNOTATION_WITHOUT_TITLE,
  title: 'Filter only days',
};

const CONTROLLED_ANNOTATIONS: Annotation[] = [
  {...SAMPLE_ANNOTATION, id: '1', },
  {...SAMPLE_ANNOTATION, id: '2', },
  {...SAMPLE_ANNOTATION, id: '3', },
];

@Injectable({
  providedIn: 'root'
})
export class AnnotationDataService {
  annotations = CONTROLLED_ANNOTATIONS
}
