import { PersonnageSheet } from "./personnage-sheet.js";

Hooks.once("init", async function() {
  console.log("Esteren | Initialisation du système Les Ombres d'Esteren");

  CONFIG.Actor.sheetClasses["personnage"] = {
    label: "Personnage Esteren",
    sheetClass: PersonnageSheet,
    types: ["personnage"],
    makeDefault: true
  };
});
