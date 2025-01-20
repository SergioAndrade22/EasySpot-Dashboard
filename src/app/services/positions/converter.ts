import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
} from '@angular/fire/firestore'
import { Data } from '../../types'

export const converter = {
    toFirestore(data: Data): DocumentData {
      return {
        id: data.id,
        code: data.code,
        position: data.position,
        description: data.description,
        phot: data.photo,
        audio: data.audio,
      }
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<Data>,
      options: SnapshotOptions
    ): Data {
      const data = snapshot.data(options)
      return {
        id: snapshot.id,
        code: data['code'],
        position: data['position'],
        description: data['description'],
        photo: data['photo'],
        audio: data['audio'],
      }
    },
  }
