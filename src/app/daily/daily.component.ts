import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  constructor() { }



  tableHeadings =["Id","Name","Status"];
  tableData = [
    {id:1,
    name:"Ashan",
    status:"Deleted"
    },
    {id:2,
      name:"Lakmal",
      status:"Active"
    },
    {id:3,
      name:"Vishwa",
      status:"Active"
    }
  ]
  Keys: string[] = ['id', 'name', 'status'];



















  display:boolean = false;

  twoway="";
  // triggerconsole (){

  // }

  
  passtochild = "Hello Child form parent";


  triggerconsole = ()=>{
      alert("This is Trigger");
      
  }


  ngOnInit(): void {
  }

}
