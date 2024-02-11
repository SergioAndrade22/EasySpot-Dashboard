import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.sass'],
})
export class DownloadComponent {
  constructor(public reference: MatDialogRef<DownloadComponent>) { }
  
  closeDialog(): void {
    this.reference.close()
  }
}
