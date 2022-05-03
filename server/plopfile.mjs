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
        path: 'src/models/{{snakeCase name}}.model.ts',
        templateFile: 'templates/model.template.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/{{snakeCase name}}.routes.ts',
        templateFile: 'templates/routes.template.hbs',
      },
      {
        type: 'add',
        path: 'src/schemas/{{snakeCase name}}.schemas.ts',
        templateFile: 'templates/schemas.template.hbs',
      },
      {
        type: 'add',
        path: 'src/controllers/{{snakeCase name}}.controller.ts',
        templateFile: 'templates/controller.template.hbs',
      },
      {
        type: 'add',
        path: 'src/services/{{snakeCase name}}.service.ts',
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
