/**
 * Wrap rule in error severity.
 * @param {any} value
 * @return {[any,{severity: string}]}
 */
const wrapWithError = value => {
  return [
    value,
    {
      severity: 'error',
    },
  ];
};

/**
 * Rule for pattern names (like, class selector names etc.)
 * @type {[string,{severity: string}]}
 */
const CAMEL_CASE = wrapWithError('^(([a-z]+[A-Z]+\\w+)|([a-z]+\\w+))+$');

module.exports = {
  rules: {
    'block-no-empty': wrapWithError(true),
    'property-no-vendor-prefix': null,

    'declaration-block-no-duplicate-properties': wrapWithError(true),
    'no-duplicate-selectors': wrapWithError(true),
    'comment-no-empty': wrapWithError(true),
    'declaration-no-important': wrapWithError(true),
    'selector-pseudo-element-colon-notation': wrapWithError('double'),

    'selector-class-pattern': CAMEL_CASE,
    'scss/at-function-pattern': CAMEL_CASE,
    'scss/at-mixin-pattern': CAMEL_CASE,
    'scss/dollar-variable-pattern': CAMEL_CASE,
    'scss/percent-placeholder-pattern': CAMEL_CASE,

    'scss/no-global-function-names': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'no-empty-source': null,
    'at-rule-empty-line-before': null,
  },
  defaultSeverity: 'warning',
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-tailwindcss',
    'stylelint-config-tailwindcss/scss',
  ],
};
