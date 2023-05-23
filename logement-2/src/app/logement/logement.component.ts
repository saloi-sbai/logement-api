import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logement } from '../models/logement-model';


const url = 'http://193.46.198.245:4532/logements';


@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  public logements!: logement[];
  public logement: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<logement[]>(url).subscribe((response: logement[]) => {
      console.log(response);
      
      this.logements = response;
    });
    
  }

}
