#!/usr/bin/env node
import brainPrimeLogic from "../gameLogic/brain-prime-logic.js";
import rulesBrainPrime from "../game-rules/rulesBrainPrime.js";
import gamePlayer from "../utilities/gamePlayer.js";

gamePlayer(brainPrimeLogic, rulesBrainPrime)