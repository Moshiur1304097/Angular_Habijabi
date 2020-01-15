import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Moshiur", "age": 26},
      {"id": 2, "name": "Zobayer", "age": 25},
      {"id": 3, "name": "Sajid", "age": 20},
      {"id": 4, "name": "Alamin", "age": 40}
    ];
  }
}
