import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'name': new FormControl('default name', Validators.required),
      'webSite': new FormControl('XperTuto.com', Validators.required),
      'technologie': new FormGroup({
        'front': new FormControl('', Validators.required),
        'back': new FormControl('', Validators.required),
        'mobile': new FormControl('', Validators.required)
      })
    })

    this.formBuilder.group(this.userForm);
  }

  getFormData(): void {
    let allData = this.userForm?.getRawValue();
    // get form data and call your API
  }
}
