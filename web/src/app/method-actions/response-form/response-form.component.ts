import {Component, Input} from '@angular/core';
import {MethodForm} from '../../services/method-form';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent {
  @Input() method: MethodForm;

  constructor() {
  }
}
