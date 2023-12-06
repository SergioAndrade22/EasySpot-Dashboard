import { Injectable, inject } from '@angular/core'
import { Firestore } from '@angular/fire/firestore'
import { collection, query, getDocs } from 'firebase/firestore'
import { converter } from './converter'

@Injectable({
  providedIn: 'root',
})
export class SamplesService {
  firestore: Firestore = inject(Firestore)

  getPositions = () => {
    const q = query(collection(this.firestore, "samples").withConverter(converter))
    return getDocs(q)
  }
}
