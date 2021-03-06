import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    private _url: string ="/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
    //  [
    //   {"id": 1, "name": "Moshiur", "age": 26},
    //   {"id": 2, "name": "Zobayer", "age": 25},
    //   {"id": 3, "name": "Sajid", "age": 20},
    //   {"id": 4, "name": "Alamin", "age": 40}
    // ];
  }
}
