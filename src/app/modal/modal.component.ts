import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ConfirmationModalComponent {
  constructor(
    public reference: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

      cerrarDialogo(): void {
        this.reference.close(false)
      }
      confirmado(): void {
        this.reference.close(true)
      }
}