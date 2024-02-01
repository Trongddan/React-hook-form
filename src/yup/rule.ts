import * as yup from "yup";
export const yupSchema = yup.object({
  city: yup.string().required("bat buoc"),
});
export type Schema = yup.InferType<typeof yupSchema>;
