import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum AppThemeType {
  Dark = "Dark",
  Light = "Light",
}

interface InitialState {
  initialApp: boolean;
  theme: AppThemeType;
  authUserName: string | null;
}

const initialState: InitialState = {
  initialApp: false,
  theme: AppThemeType.Light,
  authUserName: null,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //активируем приложение
    setInitialApp(state, action: PayloadAction<boolean>) {
      state.initialApp = action.payload;
    },
    //меняем имя пользователю
    setUserName(state, action: PayloadAction<string>) {
      state.authUserName = action.payload;
    },
    //меняем тему
    setTheme(state, action: PayloadAction<AppThemeType>) {
      state.theme = action.payload;
    },
  },
});

export const actions = slice.actions;
export const appReducer = slice.reducer;
