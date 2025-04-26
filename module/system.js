import { EsterenActor } from "./esteren-actor.js";
import { EsterenActorSheet } from "./esteren-actor-sheet.js";
import { EsterenActorData } from "./esteren-actor-data.js";

Hooks.once("init", function () {
  console.log("Esteren | Initialisation du système");

  CONFIG.Actor.documentClass = EsterenActor;

  CONFIG.Actor.typeLabels = {
    personnage: "Personnage",
    pnj: "PNJ",
  };
  
  CONFIG.Actor.templatePaths = [
    "systems/esteren/templates/actor-personnage.json",
    "systems/esteren/templates/actor-pnj.json"
  ];
});

Hooks.on("preCreateActor", (actor, data, options, userId) => {
  if (!data.type) {
    actor.updateSource({ type: "character" });
  }
});

Hooks.once("ready", function () {

});
