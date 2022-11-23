#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import interaction from '../src/index.js';
import brainProgression from '../src/games/progression.js';

const name = greetingUser();

console.log('What number is missing in the progression?');

interaction(0, brainProgression, name);
