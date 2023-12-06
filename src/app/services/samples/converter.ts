import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
} from '@angular/fire/firestore'
import { Sample } from '../../types'

export const converter = {
    toFirestore(sample: Sample): DocumentData {
      return { 
        algae: sample.algae,
        blood: sample.blood,
        bloodObservation: sample.bloodObservation,
        bone: sample.bone,
        code: sample.code,
        epibionts: sample.epibionts,
        muscle: sample.muscle,
        muscleObservation: sample.muscleObservation,
        other: sample.other,
        skin: sample.skin,
        skinObservation: sample.skinObservation,
      }
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<Sample>,
      options: SnapshotOptions
    ): Sample {
      const data = snapshot.data(options)
      return { 
        algae: data['algae'],
        blood: data['blood'],
        bloodObservation: data['bloodObservation'],
        bone: data['bone'],
        code: data['code'],
        epibionts: data['epibionts'],
        muscle: data['muscle'],
        muscleObservation: data['muscleObservation'],
        other: data['other'],
        skin: data['skin'],
        skinObservation: data['skinObservation'],
      }
    },
  }
