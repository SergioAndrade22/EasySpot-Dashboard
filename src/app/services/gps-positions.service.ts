import { Injectable, inject } from '@angular/core'
import { 
  Firestore,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore'
import { collection, query, getDocs } from 'firebase/firestore'
import { GPSLocation } from '../types'

export const positionConverter = {
  toFirestore(position: GPSLocation): DocumentData {
    return { 
      latitude: position.latitude,
      longitude: position.longitude,
      timestamp: position.timestamp,
    }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot<GPSLocation>,
    options: SnapshotOptions
  ): GPSLocation {
    const data = snapshot.data(options)
    return { 
      latitude: data['latitude'],
      longitude: data['longitude'],
      timestamp: data['timestamp'],
    }
  },
}

@Injectable({
  providedIn: 'root',
})
export class GpsPositionsService {
  firestore: Firestore = inject(Firestore)

  getPositions = () => {
    const q = query(collection(this.firestore, "positions").withConverter(positionConverter))
    return getDocs(q)
  }
}
