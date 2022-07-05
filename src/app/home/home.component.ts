import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DetailComponent } from '@app/detail/detail.component';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

const routes: Routes = [
    { path: 'details', component: DetailComponent },
  ];
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService,  private route: ActivatedRoute,
        private router: Router,) {
        this.user = this.accountService.userValue;
      //  this.user.firstName.
    }

    ngOnInit(): void {
      this.accountService.btnid=null;
     }

    onAppClick(event)
    {
      this.accountService.btnid = event;
        this.router.navigateByUrl('/details');
    }
}
