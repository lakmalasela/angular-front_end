import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  topics = ['Angular','Vue','React'];


  userModel = new  User('Amal','abc@gmail.com',66466616,'','morning',true)

  ngOnInit(): void {
  }

}
