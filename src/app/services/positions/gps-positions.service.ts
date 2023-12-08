import { Injectable, inject } from '@angular/core'
import { Firestore } from '@angular/fire/firestore'
import { collection, query, getDocs, updateDoc, doc } from 'firebase/firestore'
import { converter } from './converter'
import { Position } from '../../types'

@Injectable({
  providedIn: 'root',
})
export class GpsPositionsService {
  firestore: Firestore = inject(Firestore)

  getPositions = () => {
    const q = query(collection(this.firestore, "positions").withConverter(converter))
    return getDocs(q)
  }

  updatePositions = (positions: Position[]) => {
    for (const position of positions){
      const docRef = doc(this.firestore, "positions", position.id)
      updateDoc(docRef, { code: position.code })
    }
  }
}
