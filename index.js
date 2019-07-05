#!/usr/bin/env node

const { Compose, Constants } = require('./lib');

const [, , ...args] = process.argv;

Compose(args);
