import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  @ViewChild('f') subscriptionForm:NgForm
  defaultSubscription: string = 'Advanced'
  subscriptionFormData = {
    sfEmail: '',
    subscription: '',
    sfPassword: ''
  }
  submited=false

  constructor() { }

  ngOnInit() {
    console.log(this.subscriptionForm);
    
  }

  onSubmit(){
    this.submited=true
    this.subscriptionFormData.sfEmail = this.subscriptionForm.value.sfEmail
    this.subscriptionFormData.subscription = this.subscriptionForm.value.subscription
    this.subscriptionFormData.sfPassword = this.subscriptionForm.value.sfPassword
  }
}
