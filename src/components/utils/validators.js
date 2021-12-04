export const validators = {

    required: (value) => (value ? undefined : "Field is required."),

    maxLengthValidatorCreator: (length) => (value) => ((value && value.length) > length ? `Max length ${length} symbols.` : undefined),

    composeValidators: (...validators) => (value) =>
        validators.reduce((error, validator) => error || validator(value), undefined)

}