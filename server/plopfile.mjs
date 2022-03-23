import _ from 'lodash';

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Input your resource name',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'src/models/{{name}}.model.ts',
        templateFile: 'templates/model.template.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/{{name}}.routes.ts',
        templateFile: 'templates/routes.template.hbs',
      },
      {
        type: 'add',
        path: 'src/validators/{{name}}.schemas.ts',
        templateFile: 'templates/schemas.template.hbs',
      },
      {
        type: 'add',
        path: 'src/controllers/{{name}}.controller.ts',
        templateFile: 'templates/controller.template.hbs',
      },
      {
        type: 'add',
        path: 'src/services/{{name}}.service.ts',
        templateFile: 'templates/service.template.hbs',
      },
    ], // array of actions
  });

  plop.setHelper('titleCase', name => {
    return _.startCase(_.toLower(name));
  });

  plop.setHelper('snakeCase', name => {
    return _.snakeCase(name);
  });
}
