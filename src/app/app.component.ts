import { Component, OnInit, DoCheck } from '@angular/core';
import { UserFacadeService } from './common/facade-services/facade/user-facade.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserFacadeService]
})
export class AppComponent implements OnInit, DoCheck{
  title = 'fmxIntermodal';
  public apiToken = 'testtoken123123123'; // = '123';
  public captchaToken: string;
  public loading: boolean;
  public identity;

  
  onActivate(event) {
    window.scroll( 0 , 0 );
    // or document.body.scrollTop = 0;
    // or document.querySelector('body').scrollTo(0,0)
   
}

constructor(private _UserFacadeService:UserFacadeService){
  
}
ngOnInit(){
this.identity = this._UserFacadeService.getidentity();
}
ngDoCheck(){
     //identity refresh
this.identity = this._UserFacadeService.getidentity();
}
/* smooth scroll to top
  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}*/

}
