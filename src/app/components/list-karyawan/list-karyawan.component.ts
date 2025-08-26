import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-karyawan',
  imports: [CommonModule,MatPaginatorModule,RouterLink],
  templateUrl: './list-karyawan.component.html',
  styleUrl: './list-karyawan.component.css'
})
export class ListKaryawanComponent implements OnInit{
  constructor(private reportService:ReportService){}
    dataKaryawan:any[] = []
    paginatedKaryawan:any[] = []

    // buat pagination karyawan
    pageSize:number = 3
    currentPage:number = 0
    totalKaryawan:number = 0

    // section logic state pagination cuti per karyawan (table cuti nya masing masing)
    currentPageCuti:{[key:number]:number} = {}
    pageSizeCuti:{[key:number]:number} = {}
    pageSizeCutiDefault:number =5

    ngOnInit(): void {
      this.loadKaryawan()
    }

    loadKaryawan(){
      this.reportService.getListKaryawan().subscribe({
        next:(res:any)=> {
          this.dataKaryawan = res
          this.totalKaryawan = res.length


          // inisiasi pagination buat table cuti per karyawan
          res.forEach((element:any) => {
            this.currentPageCuti[element.idKaryawan] = 0
            this.pageSizeCuti[element.idKaryawan] = this.pageSizeCutiDefault
          });
          this.updatePaginatedKaryawan()
        },
        error:(err:any)=> {
          alert(`Error fetching data ${err}`)
          console.error("Error fetching data: ",err)
        }
      })
    }

    updatePaginatedKaryawan(){
      const start = this.currentPage * this.pageSize
      const end = start + this.pageSize
      this.paginatedKaryawan = this.dataKaryawan.slice(start,end)
    }

    onPageChange(event:PageEvent){
      this.currentPage = event.pageIndex
      this.pageSize = event.pageSize
      this.updatePaginatedKaryawan()
    }

    // get data cuti yang sudah di cut sesuai halaman

    getPaginatedCuti(karyawan:any){
      const page= this.currentPageCuti[karyawan.idKaryawan]
      const size = this.pageSizeCuti[karyawan.idKaryawan]
      const start = page*size
      const end = start + size
      return karyawan.cuti.slice(start,end)
    }

    onPageChangeCuti(event:PageEvent,idKaryawan:number) {
      this.currentPageCuti[idKaryawan] = event.pageIndex
      this.pageSizeCuti[idKaryawan] = event.pageSize
    }

}
