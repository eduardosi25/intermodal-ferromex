import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 

import { Contact } from '../../models/contact';
import { AuthenticateFacadeService } from '../../common/facade-services/facade/authenticate-facade.service';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  
  public contact: Contact;
  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
  constructor(  private authorizationFacade: AuthenticateFacadeService,
    router: Router) { 
      this.contact = new Contact("","","","","");
    router.events.subscribe(s => { 
     if (s instanceof NavigationEnd) { 
     const tree = router.parseUrl(router.url); 
     if (tree.fragment) { 
      const element = document.querySelector("#" + tree.fragment); 
      if (element) { element.scrollIntoView(true); } 
     } 
     } 
    }); 

    } 

  ngOnInit() {
//Este es para agregar un nuevo mensaje desde el formulario Contactos
this.authorizationFacade.createContact(this.contact).subscribe(
  (data) => {
  console.log("Message Contact")
  console.log(data.response);
  });
  }

}
