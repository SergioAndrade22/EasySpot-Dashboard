import { TestBed } from '@angular/core/testing'
import { GeneralMorphService } from './general-morph.service'

describe('GeneralMorphService', () => {
  let service: GeneralMorphService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(GeneralMorphService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
