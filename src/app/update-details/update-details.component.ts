import { DatePipe, formatPercent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, AlertService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.less']
})
export class UpdateDetailsComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  plansList: any;
  purchaseDate: Date;
  selectedPlan: any;
  expiryDate: Date;
  date: any;
  dueDate: any;
  selectedplan1: any;
  isCalc: boolean;
  constructor(
    private formBuilder: FormBuilder,
    public datepipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      purDate: ['', Validators.required],
      subplan: ['', Validators.required],
      expDate: ['', Validators.required],
      dueDate: ['', [Validators.required, Validators.minLength(6)]]
  });
    this.isCalc = false;
  // tslint:disable-next-line: align
  // tslint:disable-next-line: no-unused-expression
  }

  // tslint:disable-next-line: typedef
  selectOption(id: number)
  {
    this.selectedplan1 = id;
  }

  // tslint:disable-next-line: typedef
onSubmit(){
alert('Details Updated Successfully');
this.submitted = true;
// reset alerts on submit
this.alertService.clear();
this.loading = true;
this.form.controls.expDate.setValue(this.date);
this.form.controls.dueDate.setValue(this.dueDate);
const data = this.form.value;
this.router.navigate(['/details']);
this.accountService.saveData(data);
}

// tslint:disable-next-line: typedef
get f() { return this.form.controls; }

// tslint:disable-next-line: typedef
Cancel(){
    this.router.navigateByUrl('/details');
  }

    // tslint:disable-next-line: typedef
    getSubscriptionRenewingDetails(purchaseDate: Date, selectedPlan: any)
    {
  purchaseDate = this.form.controls.purDate.value;
  selectedPlan = this.selectedplan1;
  this.isCalc = true;
  const dt = new Date(purchaseDate);
  const dtp = new Date(purchaseDate);
  const todayDate = new Date();
  console.log(dt);
  switch (selectedPlan) {
  case 'Monthly' :
  this.expiryDate = new Date(dt.setDate(dt.getDate() + 30)) ;
  break;
  case 'Quarterly' :
  this.expiryDate = new Date(dt.setDate(dt.getDate() + 90)) ;
  break;
  case 'Annual' :
  this.expiryDate = new Date(dt.setDate(dt.getDate() + 365)) ;
  break;
}
  alert('Details Updated');
  this.date = this.datepipe.transform(this.expiryDate, 'MM / dd / yyyy').toString();
  const dt1 = new Date(this.date);
  dtp.setHours(0, 0, 0, 0);
  this.dueDate = Math.trunc((dt.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24));
}
}
