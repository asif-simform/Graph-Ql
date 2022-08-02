import * as Yup from 'yup'

export const validations = {
  title: Yup.string()
    .trim()
    .required('Title is required'),
  episodeId: Yup.number().required('Provide valid episode id.'),
}
