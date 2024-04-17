require('dotenv').config();

const path = require('path');
const { generateApi } = require('swagger-typescript-api');
const generateOperationId = require('./generateOperationId');

generateApi({
  input: path.resolve(__dirname, './swagger.yaml'),
  output: path.resolve(__dirname, '../src/shared/api/__generated__'),
  httpClientType: 'axios',
  prettier: {
    proseWrap: 'always',
    singleQuote: true,
    printWidth: 80,
  },
  modular: true,
  extractRequestBody: true,
  extractRequestParams: true,
  extractResponseBody: true,
  extractResponseError: true,
  generateResponses: true,
  cleanOutput: true,
  sortTypes: true,
  extractingOptions: {
    requestParamsSuffix: ['Query'],
  },
  primitiveTypeConstructs: (struct) => ({
    string: {
      'date-time': 'Date',
    },
  }),
  hooks: {
    onFormatRouteName: (routeInfo, templateRouteName) => {
      if (!routeInfo.operationId) {
        return generateOperationId(routeInfo);
      }

      return templateRouteName;
    },
    onPrepareConfig: (currentConfiguration) => ({
      ...currentConfiguration,
      apiConfig: {
        ...currentConfiguration.apiConfig,
        baseUrl: 'http://localhost:3000',
      },
    }),
  },
});
