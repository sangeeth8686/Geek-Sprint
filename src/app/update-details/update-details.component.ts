import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.less']
})
export class UpdateDetailsComponent implements OnInit {
  form: FormGroup;
  constructor( private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }

  onSubmit(){
alert('Details Updated Successfully');
  }
  Cancel(){
    this.router.navigateByUrl('/details');
  }
}
