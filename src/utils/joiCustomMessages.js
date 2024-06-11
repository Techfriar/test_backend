import globalMessages from "../config/globalMessages.json" assert { type: "json" };

const joiCustomMessages = {
  //any
  "any.custom": `${globalMessages.anyCustom} {{#label}}`,
  "any.default": `${globalMessages.anyDefault} {{#label}}`,
  "any.only": `${globalMessages.anyOnly} {{#label}}`,
  "any.required": `${globalMessages.anyRequired} {{#label}}`,

  //string
  "string.base": `${globalMessages.stringBase} {{#label}}`,
  "string.email": `${globalMessages.stringBase} a valid {{#label}}`,
  "string.empty": `${globalMessages.stringEmpty} {{#label}}`,
  "string.isoDate": `${globalMessages.stringIsoDate} {{#label}}`,
  "string.length": "{{#label}} length must be {{#limit}} characters long",
  "string.lowercase": `{{#label}} ${globalMessages.stringLowercase}`,
  "string.max":
    "{{#label}} length must be less than or equal to {{#limit}} characters long",
  "string.min": "{{#label}} length must be at least {{#limit}} characters long",
  "string.pattern.base":
    "{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}",
  "string.pattern.name":
    "{{#label}} with value {:[.]} fails to match the {{#name}} pattern",
  "string.uri": "{{#label}} must be a valid uri",
  "string.uppercase": `{{#label}} ${globalMessages.stringUppercase}`,

  //number
  "number.base": `${globalMessages.numberBase} a valid {{#label}}`,
  "number.empty": `${globalMessages.numberEmpty} {{#label}}`,
  "number.greater": "{{#label}} must be greater than {{#limit}}",
  "number.integer": `{{#label}} ${globalMessages.numberEmpty}`,
  "number.max": "{{#label}} must be less than or equal to {{#limit}}",
  "number.min": "{{#label}} must be greater than or equal to {{#limit}}",
  "number.precision":
    "{{#label}} must have no more than {{#limit}} decimal places",

  //date

  "date.base": "Please enter {{#label}}",
  "date.format":
    '{{#label}} must be in {msg("date.format." + #format) || #format} format',
  "date.greater": "{{#label}} must be greater than {{:#limit}}",
  "date.less": "{{#label}} must be less than {{:#limit}}",
  "date.max": "{{#label}} must be less than or equal to {{:#limit}}",
  "date.min": "{{#label}} must be greater than or equal to {{:#limit}}",

  // Messages used in date.format

  "date.format.iso": "ISO 8601 date",
  "date.format.javascript": "timestamp or number of milliseconds",
  "date.format.unix": "timestamp or number of seconds",

  //boolean

  "boolean.base": "{{#label}} must be a boolean",

  // array

  "array.base": "{{#label}} must be an array",
  "array.length": "{{#label}} must contain {{#limit}} items",
  "array.max": "{{#label}} must contain less than or equal to {{#limit}} items",
  "array.min": "{{#label}} must contain at least {{#limit}} items",
  "array.unique": "{{#label}} contains a duplicate value",
};

export default joiCustomMessages;
