export class EsterenActor extends Actor {
  prepareData() {
    super.prepareData();
    console.log("EsterenActor | prepareData pour", this.name);

    const system = this.system;
    // On initialise les valeurs par défaut
    system.domaines ??= {};
    system.domaines.combativite ??= 0;
    system.domaines.creativite ??= 0;
    system.domaines.empathie ??= 0;
    system.domaines.raison ??= 0;
    system.domaines.conviction ??= 0;

    // Initialiser les ressources si absentes
    system.ressources ??= {};
    system.ressources.sante ??= 10;
    system.ressources.energie ??= 10;
  }
}
