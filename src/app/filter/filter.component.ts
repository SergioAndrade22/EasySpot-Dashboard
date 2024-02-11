import { Component, Inject } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass'],
})
export class FilterComponent {
  private today = new Date()
  private month = this.today.getMonth()
  private year = this.today.getFullYear()
  dateGroup = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  })

  constructor(
    public reference: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  closeDialog(): void {
    this.reference.close({
      successful: false,
    })
  }
  confirmation(): void {
    this.reference.close({
      start: this.dateGroup.getRawValue().start?.getTime(),
      end: this.dateGroup.getRawValue().end?.getTime(),
      successful: true,
    })
  }
}
