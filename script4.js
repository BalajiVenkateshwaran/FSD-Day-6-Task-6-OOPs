// write A Class To Calculate The Uber Price

//UberDetails =>

/*  Base fare
    Cost per minute x time of the ride
    Cost per mile x ride distance
    Surge boost multiplier
    Booking fee
    Tolls
    Adding stops
    Updating your destination
    Changes to the route or trip duration
    Driver charge*/

class uberDetails {
  constructor(
    basefare,
    distance,
    bookingfee,
    tollcharge,
    surgeboostmultiplier,
    drivercharge
  ) {
    this.basefare = basefare;
    this.distance = distance;
    this.bookingfee = bookingfee;
    this.tollcharge = tollcharge;
    this.surgeboostmultiplier = surgeboostmultiplier;
    this.drivercharge = drivercharge;
  }
  getuberFare() {
    return `The Uber Fare In Chennai Is ${this.basefare * this.distance + this.bookingfee + this.drivercharge} `;
  }
}

var carchargeInChennai = new uberDetails(15, 25, 30, 25, 15, 30);
console.log(carchargeInChennai);
console.log(carchargeInChennai.getuberFare());
