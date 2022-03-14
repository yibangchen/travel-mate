import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class TripsService {
  trips = [];

  getTrips(): Promise<any> {
    return new Promise(resolve => resolve(this.trips));
  }

  getTrip(tripID): Promise<any> {
    const id = Number(tripID);
    return new Promise(resolve => {
      const trip = this.trips.find(trip => trip.id === id);
      if (!trip) throw new HttpException(`Trip ${tripID} does not exist!`, 404);
      resolve(trip);
    });
  }

  addTrip(trip): Promise<any> {
    return new Promise(resolve => {
      this.trips.push(trip);
      resolve(this.trips);
    })
  }

  deleteTrip(tripID): Promise<any> {
    const id = Number(tripID);
    return new Promise(resolve => {
      let index = this.trips.findIndex(trip => trip.id === id);
      if (index === -1) throw new HttpException(`Trip ${tripID} does not exist!`, 404);
      this.trips.splice(1, index);
      resolve(this.trips);
    });
  }
}
