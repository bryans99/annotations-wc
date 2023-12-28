import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store'
import { AnnotationListComponent } from './components/annotation-list/annotation-list.component';
import { CloseIconComponent } from './components/close-icon/close-icon.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Annotations Web Component',
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
  ],
  declarations: [AppComponent,AnnotationListComponent,CloseIconComponent],
})
export class AppModule {
  ngDoBootstrap() {}
}
