#!/usr/bin/env node
import brainProgressionLogic from "../gameLogic/brain-progression-logic.js";
import rulesBrainProgression from "../game-rules/rulesBrainProgression.js";
import gamePlayer from "../utilities/gamePlayer.js";

gamePlayer(brainProgressionLogic, rulesBrainProgression)