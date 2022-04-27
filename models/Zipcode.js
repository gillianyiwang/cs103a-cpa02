'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var zipcodeSchema = Schema( {
    county: String,
    dist: String,
    zip: String,
} );

module.exports = mongoose.model( 'Zipcode', zipcodeSchema );
