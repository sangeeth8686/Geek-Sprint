import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
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
    window.open('https://www.hotstar.com/');
  }

}
  