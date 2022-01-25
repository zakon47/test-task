import { UiButton } from "@components/Ui/UiButton";
import { UiInput } from "@components/Ui/UiInput";
import { UiTitle } from "@components/Ui/UiTitle";
import { Form, Formik, FormikProps } from "formik";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { useActions } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { RouteNames } from "@/routes";
import { transliterateWords } from "@/utils/words";

import s from "./index.module.scss";

const initialValues = {
  title: "",
};

const PageCreateForm = () => {
  const navigation = useNavigate();
  const {
    forms: { addForm },
  } = useActions();
  const listForm = useTypedSelector((store) => store.forms.listForm);
  const onSubmit = (d) => {
    addForm({
      title: d.title,
      url: createUrl(d.title),
    });
    navigation(RouteNames.home.path);
  };
  const validationSchema = useMemo(() => {
    return Yup.object({
      title: Yup.string()
        .min(3, "минимум 3 сисмвола")
        .max(30, "максимум 30 символов")
        .required("обязательно для заполнения!")
        .notOneOf(
          listForm.map((elem) => elem.title),
          "Данное название уже занято"
        ),
    });
  }, [listForm]);
  const createUrl = (str: string) =>
    transliterateWords(str.split(" ").join("-"));
  return (
    <div className={s.wrap}>
      <Helmet>
        <title>Создать новую форму</title>
      </Helmet>
      <UiTitle>Создать новую форму</UiTitle>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues as typeof initialValues}
        enableReinitialize={true}
      >
        {({ dirty, isValid, values }: FormikProps<typeof initialValues>) => (
          <Form>
            {values.title && (
              <div className={s.url}>
                <span style={{ marginRight: 10 }}>Итоговый урл:</span>
                <u>{createUrl(values.title)}</u>
              </div>
            )}
            <div className={s.body}>
              <UiInput
                name="title"
                label="Название:"
                placeholder={"Например, форма фхода"}
              />
            </div>
            <div>
              <UiButton type="submit" disabled={!dirty || !isValid}>
                Создать
              </UiButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { PageCreateForm };
