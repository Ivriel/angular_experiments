import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dummyDetailCuti } from '../dummy-data/dummy-detail-cuti';
import { dummyKaryawan } from '../dummy-data/dummy-karyawan';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  getListKaryawan():Observable<any[]> {
    return of(dummyKaryawan)
  }

  getDetailCutiById(id:number):Observable<any | undefined> {
    const detail = dummyDetailCuti.find(cuti=>cuti.id === id)
    return of(detail)
  }
}
