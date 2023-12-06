import {
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
} from '@angular/fire/firestore'
import { Marking } from '../../types'

export const converter = {
    toFirestore(marking: Marking): DocumentData {
      return { 
        code: marking.code,
        new: {
            fin: marking.new.fin,
            leftSerial: marking.new.leftSerial,
            legend: marking.new.legend,
            placed: marking.new.placed,
            rightSerial: marking.new.rightSerial,
            type: marking.new.type,
        },
        noMark: {
            fin: marking.noMark.fin,
            scar: marking.noMark.scar,
        },
        previous: {
            correctlyPlaced: marking.previous.correctlyPlaced,
            fin: marking.previous.fin,
            legend: marking.previous.legend,
            pit: marking.previous.pit,
            present: marking.previous.present,
            serial: marking.previous.serial,
            skinCovered: marking.previous.skinCovered,
            type: marking.previous.type,
        },
      }
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<Marking>,
      options: SnapshotOptions
    ): Marking {
      const data = snapshot.data(options)
      return { 
        code: data['code'],
        new: {
            fin: data['new']['fin'],
            leftSerial: data['new']['leftSerial'],
            legend: data['new']['legend'],
            placed: data['new']['placed'],
            rightSerial: data['new']['rightSerial'],
            type: data['new']['type'],
        },
        noMark: {
            fin: data['noMark']['fin'],
            scar: data['noMark']['scar'],
        },
        previous: {
            correctlyPlaced: data['previous']['correctlyPlaced'],
            fin: data['previous']['fin'],
            legend: data['previous']['legend'],
            pit: data['previous']['pit'],
            present: data['previous']['present'],
            serial: data['previous']['serial'],
            skinCovered: data['previous']['skinCovered'],
            type: data['previous']['type'],
        },
      }
    },
  }
