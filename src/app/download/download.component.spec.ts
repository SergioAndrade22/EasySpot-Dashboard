import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DownloadComponent } from './download.component'

describe('DownloadComponent', () => {
  let component: DownloadComponent
  let fixture: ComponentFixture<DownloadComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadComponent],
    })
    fixture = TestBed.createComponent(DownloadComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
