import { Injectable } from '@angular/core'
import { COLUMNS_SCHEMA, DisplayPosition } from '../../tables/tables.component'

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  exportToCsv(filename: string, rows: DisplayPosition[]) {
    if (!rows || !rows.length) {
      return
    }
    const separator = ','
    const objectIndicator = Object.apply({}, [rows[0]])
    delete objectIndicator.id
    delete objectIndicator.timestamp
    const keys = Object.keys(objectIndicator)
    const keyLabels = COLUMNS_SCHEMA.filter((column) => !(column.key === "id" || column.key === "timestamp")).map((column) => column.label)
    const csvData =
      keyLabels.join(separator) +
      '\n' +
      rows.map((row: DisplayPosition) => {
        return keys.map((key: string) => {
          let cell =
            row[key as keyof DisplayPosition] === null ||
            row[key as keyof DisplayPosition] === undefined ?
               '' :
               row[key as keyof DisplayPosition]
          if (typeof cell === 'string' && cell.search(/("|,|\n)/g) >= 0) {
            cell = `"${cell}"`
          }
          return cell
        }).join(separator)
      }).join('\n')

    const blob = new Blob([csvData], { type: 'text/csvcharset=utf-8' })
    
    const link = document.createElement('a')
    if (link.download !== undefined) {
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', filename)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
