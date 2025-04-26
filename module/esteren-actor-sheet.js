export class EsterenActorSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["esteren", "sheet", "actor"],
      template: "systems/esteren/templates/actor/character-sheet.hbs",
      width: 600,
      height: 600,
      tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}]
    });
  }
  /** @override */
  get template() {
    return `systems/esteren/templates/actor/character-sheet.hbs`;
  }

  async getData() {
    const context = super.getData();
    context.system = this.actor.system;
    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Tu peux ajouter ici des événements pour modifier les données dynamiquement.
  }
}
