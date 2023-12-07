import { Component, OnInit, ViewChild } from '@angular/core'
import { Position } from '../types'
import { GpsPositionsService } from '../services/gps-positions.service'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { formatDate } from '@angular/common'

type Column = {
  key: string
  type: string
  label: string
}

const COLUMNS_SCHEMA: Column[] = [
  {
    key: 'code',
    type: 'text',
    label: 'Código',
  },
  {
    key: 'date',
    type: 'text',
    label: 'Fecha',
  },
  {
    key: 'time',
    type: 'time',
    label: 'Hora',
  },
  {
    key: 'longitude',
    type: 'text',
    label: 'Longitud',
  },
  {
    key: 'latitude',
    type: 'text',
    label: 'Latitud',
  },
]

type DisplayPosition = {
  code: string
  date: string
  time: string
  longitude: string
  latitude: string
  timestamp: number
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.sass'],
})
export class TablesComponent implements OnInit {
  loading = false
  positions: Position[] = []
  columnsSchema: Column[] = COLUMNS_SCHEMA
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key)
  dataSource: MatTableDataSource<DisplayPosition>

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private positionsService: GpsPositionsService) {}

  ngOnInit(): void {
    this.fetchPositions()
  }

  fetchPositions(): void {
    this.loading = true
    this.positionsService.getPositions().then((snapshot) => {
      this.positions = []
      snapshot.forEach((position) => this.positions.push(position.data()))
      this.refreshDataSource()
    })
  }

  refreshDataSource(): void {
    this.dataSource = new MatTableDataSource<DisplayPosition>(this.positions.map(this.toDisplayPosition))
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
    this.loading = false
  }

  updatePositions(): void {
    console.log(this.dataSource.data.map(this.toDatabasePosition))
  }

  toDisplayPosition(position: Position): DisplayPosition {
    return {
      code: position.code,
      date: formatDate(new Date(position.timestamp * 1000), "dd/MM/yyyy", "en"),
      time: formatDate(new Date(position.timestamp * 1000), "HH:mm", "en"),
      longitude: position.longitude.toString(),
      latitude: position.latitude.toString(),
      timestamp: position.timestamp,
    }
  }

  toDatabasePosition(position: DisplayPosition): Position {
    return {
      code: position.code,
      longitude: parseFloat(position.longitude),
      latitude: parseFloat(position.latitude),
      timestamp: position.timestamp,
    }
  }
}
