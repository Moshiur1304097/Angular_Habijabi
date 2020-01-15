import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public employees =[
    {"id": 1, "name": "Moshiur", "age": 26},
    {"id": 2, "name": "Zobayer", "age": 25},
    {"id": 3, "name": "Sajid", "age": 20},
    {"id": 4, "name": "Alamin", "age": 40}
  ];


}
