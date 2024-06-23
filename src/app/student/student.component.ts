import { Component, OnInit } from '@angular/core';
import {Student} from '../student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  
  topics = ['Angular','Vue','React'];


  studentModel = new  Student('Amal','abc@gmail.com',66466616,'','morning',true)

  constructor() { }

  ngOnInit(): void {
  }

}
