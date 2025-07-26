import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { ReportService } from '../../services/report.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-report-detail',
  imports: [CommonModule,RouterLink],
  templateUrl: './report-detail.component.html',
  styleUrl: './report-detail.component.css'
})
export class ReportDetailComponent implements OnInit {
  detailCuti!:any;

  constructor(private route:ActivatedRoute,private reportService:ReportService){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.loadDetailCuti(id)
  }

  loadDetailCuti(id:number){
    this.reportService.getDetailCutiById(id).subscribe({
      next:(res:any)=> {
        this.detailCuti = res
        console.log("Detail cuti: ",this.detailCuti)
      }
    })
  }
}
