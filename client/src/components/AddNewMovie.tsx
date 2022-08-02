import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import { useCreateFilmMutation } from 'generated/graphql'
import { validations } from 'utils/validations'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

type IProps = {
  title: string
  episodeId: number | string
}

const defaultInitialValues: IProps = {
  title: '',
  episodeId: '',
}

export const AddNewMovie: React.FC<any> = () => {
  // const [createFilmMutation, { loading, error }] = useCreateFilmMutation()

  const onSubmit = (values : IProps) => {
    // createFilmMutation({ variables: values })
  }

  return (
    <main>
      <div className="form-style-5">
        <Formik
          initialValues={{
            ...defaultInitialValues,
          }}
          onSubmit={onSubmit}
          validationSchema={Yup.object().shape({
            title: validations.title,
            episodeId: validations.episodeId,
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
            } = props
            return (
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>
                    <span className="number">1</span> Movie Info
                  </legend>
                  {/* {error && (
                    <p className="error"> {JSON.stringify(error.message)} </p>
                  )} */}
                  <Input
                    type="text"
                    name="title"
                    placeholder="Enter title."
                    onChange={handleChange}
                    value={values.title}
                    onBlur={handleBlur}
                    isError={touched.title && errors.title}
                    errorMesage={errors.title}
                  />
                  <Input
                    type="number"
                    name="episodeId"
                    placeholder="Enter episode id."
                    onChange={handleChange}
                    value={values.episodeId}
                    onBlur={handleBlur}
                    isError={touched.episodeId && errors.episodeId}
                    errorMesage={errors.episodeId}
                  />
                  <Button type="submit" disabled={false}>
                    {false ? 'Loading...' : 'Add New Movie'}
                  </Button>
                </fieldset>
              </form>
            )
          }}
        </Formik>
      </div>
    </main>
  )
}
