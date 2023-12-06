import { Component, OnInit, ViewChild } from '@angular/core'
import { Position } from '../types'
import { GpsPositionsService } from '../services/gps-positions.service'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.sass'],
})
export class TablesComponent implements OnInit {
  positions: Position[] = []
  displayedColumns: string[] = ['latitude', 'longitude', 'timestamp']
  dataSource: MatTableDataSource<Position>

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private positionsService: GpsPositionsService) {}

  ngOnInit(): void {
    this.positionsService.getPositions().then((snapshot) => {
      snapshot.forEach((position) => this.positions.push(position.data()))
      this.refreshDataSource()
    })
  }

  refreshDataSource(): void {
    this.dataSource = new MatTableDataSource<Position>(this.positions)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
