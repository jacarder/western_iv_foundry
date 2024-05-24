/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/western-iv/templates/actor/parts/actor-main.hbs',
    'systems/western-iv/templates/actor/parts/actor-moves-specializations.hbs',
    'systems/western-iv/templates/actor/parts/actor-skills.hbs',
    'systems/western-iv/templates/actor/parts/actor-items.hbs',
    'systems/western-iv/templates/actor/parts/actor-spells.hbs',
    'systems/western-iv/templates/actor/parts/actor-effects.hbs',
    // Item partials
    'systems/western-iv/templates/item/parts/item-effects.hbs',
  ]);
};
