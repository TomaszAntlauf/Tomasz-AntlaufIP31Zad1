import { Injectable } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { IPotwory } from './ipotwory';

@Injectable({
    providedIn: 'root',
})
export class Csvexporter {
    csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Lista :',
        useBom: true,
        noDownload: false,
        headers: [ "ID", "Nazwa","IMG", "Opis"]
      };
      downloadCSV(potwory:IPotwory[]){
        //this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options
        new  AngularCsv(potwory, "Lista", this.csvOptions);
      }
}