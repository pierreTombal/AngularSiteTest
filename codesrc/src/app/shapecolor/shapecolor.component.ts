import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shapecolor',
  templateUrl: './shapecolor.component.html',
  styleUrls: ['./shapecolor.component.css']
})
export class ShapecolorComponent{
  shapecolor = new FormControl('');
}
