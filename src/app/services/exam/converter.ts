import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
} from '@angular/fire/firestore'
import { Exam } from '../../types'

export const converter = {
    toFirestore(exam: Exam): DocumentData {
      return { 
        carapace: {
            observation: exam.carapace.observation,
            status: exam.carapace.status,
        },
        cloaca: {
            observation: exam.cloaca.observation,
            status: exam.cloaca.status,
        },
        code: exam.code,
        comments: exam.comments,
        eyes: {
            observation: exam.eyes.observation,
            placement: exam.eyes.placement,
            status: exam.eyes.status,
        },
        feces: {
            observation: exam.feces.observation,
        },
        integumentary: {
            observation: exam.integumentary.observation,
            region: exam.integumentary.region,
            status: exam.integumentary.status,
        },
        plastron: {
            observation: exam.plastron.observation,
            status: exam.plastron.status,
        },
        secretions: {
            location: exam.secretions.location,
            observation: exam.secretions.observation,
            presence: exam.secretions.presence,
        },
      }
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<Exam>,
      options: SnapshotOptions
    ): Exam {
      const data = snapshot.data(options)
      return { 
        carapace: {
            observation: data['carapace']['observation'],
            status: data['carapace']['status'],
        },
        cloaca: {
            observation: data['cloaca']['observation'],
            status: data['cloaca']['status'],
        },
        code: data['code'],
        comments: data['comments'],
        eyes: {
            observation: data['eyes']['observation'],
            placement: data['eyes']['placement'],
            status: data['eyes']['status'],
        },
        feces: {
            observation: data['feces']['observation'],
        },
        integumentary: {
            observation: data['integumentary']['observation'],
            region: data['integumentary']['region'],
            status: data['integumentary']['status'],
        },
        plastron: {
            observation: data['plastron']['observation'],
            status: data['plastron']['status'],
        },
        secretions: {
            location: data['secretions']['location'],
            observation: data['secretions']['observation'],
            presence: data['secretions']['presence'],
        },
      }
    },
  }