import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IForm = {
  title: string;
  url: string;
  code?: string;
};

interface InitialState {
  listForm: IForm[];
}
const initialState: InitialState = {
  listForm: [
    {
      title: "test",
      url: "dsd2222d-222",
    },
    {
      title: "test2",
      url: "dsd2222d-2223",
    },
  ],
};

const slice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    //добавляем форму
    addForm(state, action: PayloadAction<IForm>) {
      state.listForm.push(action.payload);
    },
    //удаляем форму
    removeForm(state, action: PayloadAction<IForm>) {
      state.listForm = state.listForm.filter(
        (elem) => elem.url !== action.payload.url
      );
    },
  },
});

export const actions = slice.actions;
export const formsReducer = slice.reducer;
