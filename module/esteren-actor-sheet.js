export class EsterenActorSheet extends ActorSheet {
  static get defaultOptions() {
    // return foundry.utils.mergeObject(super.defaultOptions, {
    //   classes: ["esteren", "sheet", "actor"],
    //   template: "systems/esteren/templates/actor-sheet.html",
    //   width: 600,
    //   height: 400,
    //   submitOnChange: true,
    //   submitOnClose: true 
    // });

    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["esteren", "sheet", "actor"],
      template: "systems/esteren/templates/actor-sheet.html",
      width: 600,
      height: 600,
      submitOnChange: true,
      submitOnClose: true,
      closeOnSubmit: false
    });
  }

  getData() {
    const data = super.getData();
    console.log("Chargement des données de la fiche", data);
    data.system = data.actor.system
    return data;
  }

  async _updateObject(event, formData) {
    console.log("Données du formulaire :", formData);
    return super._updateObject(event, formData);
  }

  activateListeners(html) {
    super.activateListeners(html);
  
    html.on("submit", (event) => {
      console.log("Formulaire soumis");
    });
  
    html.on("change", "input", (event) => {
      console.log(`Champ modifié : ${event.target.name} = ${event.target.value}`);
    });

    html.find(".roll-stat").on("click", async ev => {
      ev.preventDefault();
  
      const stat = ev.currentTarget.dataset.stat;
      const value = this.actor.system.domaines[stat] ?? 0;
      const label = game.i18n.localize(`ESTEREN.${stat}`); // assume lower-case keys
  
      const roll = await new Roll(`1d10 + ${value}`).evaluate({ async: true });
  
      await roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: `${label} (${value})`
      });
    });
  }
}
