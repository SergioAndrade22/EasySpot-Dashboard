import { Injectable, inject } from '@angular/core'
import { Firestore } from '@angular/fire/firestore'
import { collection, query, getDocs } from 'firebase/firestore'
import { converter } from './converter'

@Injectable({
  providedIn: 'root',
})
export class GpsPositionsService {
  firestore: Firestore = inject(Firestore)

  getPositions = () => {
    const q = query(collection(this.firestore, "positions").withConverter(converter))
    return getDocs(q)
  }
}
