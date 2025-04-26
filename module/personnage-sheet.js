export class PersonnageSheet extends ActorSheet {
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["esteren", "sheet", "personnage"],
        template: "templates/actor/personnage-sheet.html",
        width: 600,
        height: 600,
        tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}]
      });
    }
  
    getData(options) {
      const context = super.getData(options);
      context.system = this.actor.system; // en v12, c'est system, pas data
      return context;
    }
  }
  