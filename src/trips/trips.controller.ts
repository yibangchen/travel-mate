import { Controller, Param, Body, Query, Delete, Get, Post } from '@nestjs/common';
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
  constructor(private tripsService: TripsService) { }

  @Get()
  async getTrips() {
    const trips = await this.tripsService.getTrips();
    return trips;
  }

  @Get(':tripID')
  async getTrip(@Param('tripID') tripID) {
    const trip = await this.tripsService.getTrip(tripID);
    return trip;
  }

  @Post()
  async addTrip() {
    // to be added
  }

  @Delete()
  async deleteTrip(@Query() query) {
    const trips = await this.tripsService.deleteTrip(query.tripID);
    return trips;
  }
}
