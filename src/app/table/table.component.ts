import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() public childvalue: any;

  @Input() public Headingfromdaily: any;
  @Input() public Datafromdaily: any;
  @Input() public dataKeys: any;
  ngOnInit(): void {
  }

}
