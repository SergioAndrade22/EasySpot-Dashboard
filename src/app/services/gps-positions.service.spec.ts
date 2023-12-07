import { TestBed } from '@angular/core/testing'
import { GpsPositionsService } from './gps-positions.service'

describe('GpsPositionsService', () => {
  let service: GpsPositionsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(GpsPositionsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
