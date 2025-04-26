import { EsterenActorData } from "./esteren-actor-data.js";

export class EsterenActor extends Actor {
  static get schema() {
    return EsterenActorData.schema;
  }

  prepareData() {
    super.prepareData();
    console.log("EsterenActor | prepareData pour", this.name);
  }
}
