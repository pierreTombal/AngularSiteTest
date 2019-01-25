import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { DragNDropComponent } from './drag-ndrop/drag-ndrop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ShapecolorComponent } from './shapecolor/shapecolor.component';

const appRoutes: Routes = [
  { path: 'DragAndDrop', component: DragNDropComponent },
  { path: 'Home', component: HomeComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    DragNDropComponent,
    PageNotFoundComponent,
    HomeComponent,
    ShapecolorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DragDropModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
