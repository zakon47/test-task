import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IForm } from "@/modals/forms";

interface InitialState {
  listForm: IForm[];
}
const initialState: InitialState = {
  listForm: [],
};

const slice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    //перезаписываем формы
    setForm(state, action: PayloadAction<IForm[]>) {
      state.listForm = action.payload;
    },
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
