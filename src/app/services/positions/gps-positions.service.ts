import { Injectable, inject } from '@angular/core'
import { 
  collection,
  doc,
  Firestore,
  getDocs,
  query,
  updateDoc,
} from '@angular/fire/firestore'
import { converter } from './converter'
import { Position } from '../../types'

@Injectable({
  providedIn: 'root',
})
export class GpsPositionsService {
  private firestore: Firestore = inject(Firestore)

  getPositions = () => {
    const c = collection(this.firestore, "positions").withConverter(converter)
    console.log("The colleciton:", c)
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
