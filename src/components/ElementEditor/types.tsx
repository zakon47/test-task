export enum IElementMainType {
  input,
  textarea,
  checkbox,
  button,
}
export enum IButtonElementType {
  submit,
  button,
  reset,
}
export enum IInputElementType {
  text,
  email,
  number,
  phone,
}

interface IElement {
  elementType: IElementMainType;
}
interface s1 {
  subType: IButtonElementType.button;
  xxx: string;
  zakon?: string;
}
interface s2 {
  subType: IButtonElementType.submit;
  ruslan: string;
}
type SSS = s2 | s1;

//КНОПКА
type IButtonElement<T extends IButtonElementType> = IElement & {
  elementType: IElementMainType.button;
  subType: T;
  text: string;
  disabled: boolean;
} & SSS;

//INPUT
type IInputElement<T extends IInputElementType> = IElement & {
  elementType: IElementMainType.input;
  subType: T;
  placeholder: string;
  disabled: boolean;
  required: boolean;
};

///////======================
const xx: IButtonElement<IButtonElementType.button> = {
  elementType: IElementMainType.button,
  subType: IButtonElementType.button,
  text: "1111",
  disabled: true,
  xxx: "111",
};
const xx1: IButtonElement<IButtonElementType.submit> = {
  elementType: IElementMainType.button,
  subType: IButtonElementType.submit,
  text: "1111",
  disabled: true,
  ruslan: "111",
};

///////======================
const yy: IInputElement<IInputElementType.phone> = {
  elementType: IElementMainType.input,
  subType: IInputElementType.phone,
  placeholder: "1111",
  disabled: true,
  required: true,
};
//основные типы элементов
type IElements =
  | IButtonElement<IButtonElementType>
  | IInputElement<IInputElementType>;

const arr: IElements[] = [xx, xx1, yy];

arr.map((elem) => {
  switch (elem.elementType) {
    case IElementMainType.button:
      switch (elem.subType) {
        case IButtonElementType.submit: {
          console.log("button-submit", elem.ruslan);
          break;
        }
        case IButtonElementType.button: {
          console.log("button-submit", elem.zakon);
          break;
        }
      }
      break;
    // case IElementMainType.textarea:
    //   console.log("textarea");
    //   break;
    case IElementMainType.input:
      switch (elem.subType) {
        case IInputElementType.email: {
          console.log("button-submit", elem.placeholder);
          break;
        }
      }
      console.log("input");
      break;
    // case IElementMainType.checkbox:
    //   console.log("checkbox");
    //   break;
    default:
      console.log("ЕЛЕМЕНТ НЕ ОПРЕДЕЛЕН!");
  }
});
