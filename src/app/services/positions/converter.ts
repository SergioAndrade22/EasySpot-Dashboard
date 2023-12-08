import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
} from '@angular/fire/firestore'
import { Position } from '../../types'

export const converter = {
    toFirestore(position: Position): DocumentData {
      return {
        id: position.id,
        code: position.code,
        latitude: position.latitude,
        longitude: position.longitude,
        timestamp: position.timestamp,
      }
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<Position>,
      options: SnapshotOptions
    ): Position {
      const data = snapshot.data(options)
      return {
        id: snapshot.id,
        code: data['code'],
        latitude: data['latitude'],
        longitude: data['longitude'],
        timestamp: data['timestamp'],
      }
    },
  }
