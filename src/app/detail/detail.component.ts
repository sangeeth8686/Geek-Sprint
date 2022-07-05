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
  ngOnInit(): void {
    this.detailsfound = false;
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
  