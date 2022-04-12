export const validators = {

    required: (value:string) => (value ? undefined : "Field is required."),

    maxLengthValidatorCreator: (length:number) => (value:string) => ((value && value.length) > length ? `Max length ${length} symbols.` : undefined),

    composeValidators: (...validators:Array<any>) => (value:string) =>
        validators.reduce((error, validator) => error || validator(value), undefined)
}