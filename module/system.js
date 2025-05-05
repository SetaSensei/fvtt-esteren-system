import { EsterenActor } from "./esteren-actor.js";
import { EsterenActorSheet } from "./esteren-actor-sheet.js";

Hooks.once("init", function () {
  console.log("Esteren | Initialisation du système");

  const systemTitactorName = game.i18n.localize("ESTEREN.ActorName");
  console.log(`Esteren | Titre du système : ${systemTitactorName}`);

  CONFIG.Actor.documentClass = EsterenActor;
  CONFIG.Actor.typeLabels = {
    base: "Personnage"
  };

  // Si type non renseigné -> forcer "base"
  const origCreateDialog = Actor.createDialog;
  Actor.createDialog = function (data = {}, options = {}) {
    data.type ??= "base";  // <- forcé à "base" si undefined
    return origCreateDialog.call(this, data, options);
  };

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("esteren", EsterenActorSheet, {
    types: ["base"],  
    makeDefault: true
  });

  InitHandlebars();
  
});

function InitHandlebars() {
  (async function registerPartials() {
    const template = await fetch("systems/esteren/templates/partials/stat-input.hbs").then(r => r.text());
    Handlebars.registerPartial("statInput", template);
  })();
}

