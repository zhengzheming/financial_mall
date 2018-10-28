import validators from "./validators";
export default function extendValidator(Validator) {
  validators.forEach(validator => Validator.extend(validator.name, validator));
}
