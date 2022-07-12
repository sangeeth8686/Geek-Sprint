import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  constructor(private accountService: AccountService, private route: ActivatedRoute,
              private router: Router,) { }
 // tslint:disable-next-line: ban-types
 detailsfound: Boolean = false;
 dataToDisplay: any;
 dueDate: number;
 expDate: any;
 purDate: any;
 subplan: string;

 ngOnInit(): void {
  if(this.accountService.data)
  {
    this.detailsfound = true;

    this.dueDate = this.accountService.data.dueDate;
    this.purDate = this.accountService.data.purDate;
    this.expDate = this.accountService.data.expDate;
    this.subplan = this.accountService.data.subplan;
  }
}

  updateDetails()
  {
        this.router.navigateByUrl('/updateDetails');
  }
  buyNow(){
    switch(this.accountService.btnid)
    {
      case "1":
        {
          window.open('https://www.hotstar.com/');
          break;
        }
      case "2":
        {
          window.open('https://www.aha.video/');
          break;
        }
      case "3":
        {
          window.open('https://www.youtube.com/');
          break;
        }
      case "4":
       {
           window.open('https://www.zee5.com/');
           break;
       }
      case "5":
       {
          window.open('https://www.primevideo.com/');
          break;
       }
      case "6":
       {
           window.open('https://www.netflix.com');
           break;
       }

    }
    
  }

}
  