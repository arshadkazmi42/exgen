#!/usr/bin/env node

const Compose = require('./lib/compose');


const [, , ...args] = process.argv;


// Squash the command
Compose(args);
