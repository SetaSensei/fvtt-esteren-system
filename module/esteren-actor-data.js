export class EsterenActorData extends foundry.abstract.DataModel {
  static defineSchema() {
    return {
      type: new foundry.data.fields.StringField({
        required: true,
        initial: "personnage",
        choices: ["personnage", "pnj"],
      }),
      name: new foundry.data.fields.StringField({
        required: true,
        initial: "",
      }),
      system: new foundry.data.fields.ObjectField({
        initial: {},
      }),
      effects: new foundry.data.fields.ArrayField(
        new foundry.data.fields.ObjectField({})
      ),
      items: new foundry.data.fields.ArrayField(
        new foundry.data.fields.ObjectField({})
      ),
      ownership: new foundry.data.fields.ObjectField({
        initial: { default: 0 },
      }),
      sort: new foundry.data.fields.NumberField({
        initial: 0,
      }),
    };
  }
}
