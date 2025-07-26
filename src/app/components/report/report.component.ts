import { Component } from '@angular/core';
import { ListKaryawanComponent } from '../list-karyawan/list-karyawan.component';
import { CutiTahunanComponent } from '../cuti-tahunan/cuti-tahunan.component';
@Component({
  selector: 'app-report',
  imports: [ListKaryawanComponent,CutiTahunanComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
