// Iteration #1
require('../configs/db.config');
const Drones = require('../models/drones.model');
const mongoose = require('mongoose');


const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];


Drones.create(drones)
  .then(drones => {
      drones.forEach(drone => {
          console.log(`The drone ${drone.name} was created`);
      })
      mongoose.connection.close()     
  })
  .catch(error => console.error(error));