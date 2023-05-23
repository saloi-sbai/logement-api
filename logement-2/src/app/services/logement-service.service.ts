import { Injectable } from '@angular/core';
import { logement } from '../models/logement-model';

@Injectable({
  providedIn: 'root',
})
export class LogementServiceService {
  tab: logement[] = [
    {
      ville: '',
      codePostal: 0,
      adresse: '',
    },
  ];

  listeLogements(): logement[] {
    return this.tab;
  }

  constructor() {}
}
