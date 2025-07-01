import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService,User } from '../../services/data.service';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  imports:[MatTableModule,CommonModule]
})
export class DialogComponent implements OnInit {
  users: User[] = [];

  constructor(private dialog: MatDialog, private dataService: DataService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.getAll().subscribe(data => this.users = data);
  }

  openDialog(user?: User) {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '400px',
      data: user ? { ...user } : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.loadUsers();
    });
  }

  deleteUser(id: string) {
    if (confirm('Delete user?')) {
      this.dataService.delete(id).subscribe(() => this.loadUsers());
    }
  }

}
