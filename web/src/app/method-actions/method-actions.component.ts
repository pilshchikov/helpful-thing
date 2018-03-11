import {Component} from '@angular/core';
import {MethodForm} from '../services/method-form';
import {MethodsFormService} from "../services/methods-form-service";

/**
 * Forms list component
 */
@Component({
  selector: 'app-method-actions',
  templateUrl: './method-actions.component.html',
  styleUrls: ['./method-actions.component.css']
})
export class MethodActionsComponent {

  /**
   * List of selected forms
   * @type {Array}
   */
  methods: Array<MethodForm> = [];

  /**
   * Multiform toggle
   */
  multiform: Boolean;

  /**
   * Subscribe on form list and multiform toggle
   * @param {MethodsFormService} methodService  form list service
   */
  constructor(private methodService: MethodsFormService) {
    this.methodService.getSelectedMethods().subscribe(item => this.methods = item);
    this.methodService.getMultiform().subscribe(item => this.multiform = item);
  }

  /**
   * Executed form with submitted data
   * @param {Array<string>} values  form data
   * @param {MethodForm} form       form object
   */
  onExecute(values: Array<string>, form: MethodForm) {
    form.loadingState = true;
    form.response = null;
    this.methodService.executeMethod(values).subscribe(item => form.response = item);
  }

  /**
   * Close form
   * @param {MethodForm} form   form object
   */
  close(form: MethodForm) {
    this.methodService.deleteFromSelected(form);
  }
}
