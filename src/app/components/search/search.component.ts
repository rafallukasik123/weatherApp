import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert = 'This field is required';
  constructor(private formBuilder: FormBuilder, private mainservice: MainService) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      validate: ''
    });
  }


  ngOnInit(): void {
    this.setChangeValidate();
  }
  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }
  onSubmit(value: any) {
    this.mainservice.sendCityName(value.name);
  }
}
