#!/usr/bin/env node
import brainEvenLogic from "../gameLogic/brain-even-logic.js";
import rulesBrainEven from "../game-rules/rulesBrainEven.js";
import gamePlayer from "../utilities/gamePlayer.js";

gamePlayer(brainEvenLogic, rulesBrainEven)
