import { Injectable, inject } from '@angular/core'
import { Firestore } from '@angular/fire/firestore'
import { collection, getDocs, query } from 'firebase/firestore'
import { converter } from './converter'

@Injectable({
  providedIn: 'root',
})
export class GeneralMorphService {
  firestore: Firestore = inject(Firestore)

  getPositions = () => {
    const q = query(collection(this.firestore, "general_morph").withConverter(converter))
    return getDocs(q)
  }
}
