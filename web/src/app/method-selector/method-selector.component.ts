import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MethodForm} from '../services/method-form';
import {ApiService} from '../services/api.service';
import {MethodsFormService} from "../services/methods-form-service";

/**
 * Forms list
 */
@Component({
  selector: 'app-method-selector',
  templateUrl: './method-selector.component.html',
  styleUrls: ['./method-selector.component.css']
})
export class MethodSelectorComponent implements OnInit {
  /**
   * forms list
   */
  formBuilder;

  /**
   * Multiform toggle
   */
  multiform;

  constructor(private methodService: MethodsFormService) {
  }

  /**
   * Subscribe on services
   */
  ngOnInit() {
    this.methodService.getForm().subscribe(item => this.formBuilder = item);
    this.methodService.getMultiform().subscribe(item => this.multiform = item);
  }

  /**
   * Add method in active list
   * @param {MethodForm} selectedMethod
   */
  selectMethod(selectedMethod: MethodForm) {
    this.methodService.addToSelected(selectedMethod);
  }

  /**
   * Close all selected forms
   */
  clearForms() {
    this.methodService.clearAllSelected();
  }

  /**
   * Multiform toggle
   */
  onToggle() {
    this.methodService.switchMultiform();
  }
}
