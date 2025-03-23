#!/usr/bin/env node
import brainCalcLogic from "../gameLogic/brain-calc-logic.js";
import rulesBrainCalc from "../game-rules/rulesBrainCalc.js";
import gamePlayer from "../utilities/gamePlayer.js";

gamePlayer(brainCalcLogic, rulesBrainCalc)