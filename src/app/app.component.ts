import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // title = 'app';
  message ="Hi How Are you?";



public employees: any = 
  [
    {id: 1,
      name: "Vishwa",
      subject: "Maths"
    },
    {id: 2,
      name: "Nimal",
      subject: "Phy6"
    },
    {id: 3,
      name: "Kamal",
      subject: "Chemistry"
    }
  ];

  



  //passtochild = "Hello Child form parent";
}
