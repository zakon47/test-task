import { UiButton } from "@components/Ui/UiButton";
import { UiInput } from "@components/Ui/UiInput";
import { UiTitle } from "@components/Ui/UiTitle";
import {
  Field,
  FieldHookConfig,
  FieldProps,
  Form,
  Formik,
  FormikProps,
  useField,
} from "formik";
import { FC, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";

import { transliterateWords } from "@/utils/words";

import s from "./index.module.scss";

const initialValues = {
  title: "",
  url: "",
};

const PageCreateForm = () => {
  const onSubmit = (d) => {
    console.log("data", d);
  };
  const validationSchema = useMemo(() => {
    return Yup.object({
      title: Yup.string()
        .min(3, "минимум 3 сисмвола")
        .max(30, "максимум 30 символов")
        .required("обязательно для заполнения!"),
    });
  }, []);
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
                Итоговый урл:{" "}
                <u>{transliterateWords(values.title.split(" ").join("-"))}</u>
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
