'use strict';
var spaseships = [];

function SPACE(name, engine, speed, seats, booked, seatsTypes, reservations, locations, image, date, rating, price) {
    this.id = spaseships.length;
    this.name = name;
    this.seats = seats;
    this.booked = booked;
    this.seatsTypes = seatsTypes;
    this.reservations = reservations;
    this.locations = locations;
    this.speed = speed;
    this.engine = engine;
    this.image = image;
    this.date = date;
    this.rating = rating;
    this.price = price;
}

function createData(){
    spaseships.push(new SPACE('Enterprise', 'foton', '10000000 ye/s', 230, 189, ['window', 'middle', 'economy', 'business', 'economy', 'economy premium'], [ [1, 2], [3, 4], [5, 6] ], ['Earth', 'Moon', 'Mars', 'Venus', 'Nabu'], 'img/1.jpg',["2017-05-01", "2017-05-02"], 5, 32)); 

    spaseships.push(new SPACE('VeiderShip', 'foton', 'fast', 230, 189, ['window', 'middle', 'economy', 'business', 'economy', 'economy premium'], [ [1, 2], [3, 4], [5, 6] ], ['Earth', 'Moon', 'Mars', 'Venus','Nabu'], 'img/ufo.svg', ["2017-05-01", "2017-05-02", "2017-05-03"], 0, 44));

    spaseships.push(new SPACE('AA-9 CORUSCANT FREIGHTER', 'foton', 'super-fast', 230, 189, ['window', 'middle', 'economy', 'business', 'economy', 'economy premium'], [ [1, 2], [3, 4], [5, 6] ], ['Earth', 'Moon', 'Mars', 'Venus', 'Tatuin', 'Nabu'], 'img/space-ship.png',["2017-05-03","2017-05-05"], 3, 12));

    spaseships.push(new SPACE('Appolo', 'foton', 'super-fast', 230, 189, ['window', 'middle', 'economy', 'business', 'economy', 'economy premium'], [ [1, 2], [3, 4], [5, 6] ], ['Earth', 'Moon', 'Mars', 'Venus', 'Tatuin', 'Nabu'], 'img/ufo.svg', ["2017-05-04","2017-05-10", "2017-05-11"], 4, 32));

    spaseships.push(new SPACE('SpaceBus', 'foton', 'super-fast', 230, 189, ['window', 'middle', 'economy', 'business', 'economy', 'economy premium'], [ [1, 2], [3, 4], [5, 6] ], ['Moon', 'Mars', 'Venus', 'Nabu'], 'img/mars.svg', ["2017-05-01", "2017-05-02"], 5, 45));

    spaseships.push(new SPACE('SpaceMoonBus', 'foton', 'super-fast', 230, 189, ['window', 'middle', 'economy', 'business', 'economy', 'economy premium'], [ [1, 2], [3, 4], [5, 6] ], ['Moon', 'Nabu'], 'img/jupiter.svg', ["2017-05-06", "2017-05-07"], 5, 34.5));

    spaseships.push(new SPACE('Enterprise1', 'foton', 'super-fast', 230, 189, ['window', 'middle', 'economy', 'business', 'economy', 'economy premium'], [ [1, 2], [3, 4], [5, 6] ], [ 'Mars', 'Venus', 'Tatuin', 'Nabu'],'img/ufo.svg', ["2017-05-07", "2017-05-09"], 0, 46));
}

createData();





























