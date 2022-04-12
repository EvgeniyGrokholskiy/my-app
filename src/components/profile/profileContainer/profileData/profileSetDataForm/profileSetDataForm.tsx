import React from "react"
import style from "../profileData.module.css"
import {Field, Form, FormRenderProps} from "react-final-form"
import {IProfileSetDataFormProps} from "../../../../../types/types"


const ProfileSetDataForm: React.FC<IProfileSetDataFormProps> = ({
                                                                    error,
                                                                    errorMessage,
                                                                    state,
                                                                    setEditMode,
                                                                    setUserProfileData
                                                                }) => {

    return (
        <Form
            initialValues={state.profile}
            onSubmit={(data) => {
                setUserProfileData(data)
                    .then((response: any) => {
                        if (response.resultCode === 0) {
                            setEditMode(false)
                        }
                    })
            }}

            render={({handleSubmit}: FormRenderProps<Record<string, any>, any>) => (
                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.form__field}>
                        <label className={style.label}>Full Name
                            <Field name="fullName" component={"input"}/>
                        </label>
                        <label className={style.label}>About Me:
                            <Field name="aboutMe" component={"textarea"}/>
                        </label>
                        <label className={style.label}>lookingForAJob:
                            <Field name="lookingForAJob" component={"input"} type={"checkBox"}/>
                        </label>
                        <label className={style.label}>lookingForAJobDescription:
                            <Field name="lookingForAJobDescription" component={"textarea"}/>
                        </label>
                        <p>Contacts:</p>
                        <label className={style.label}>github:
                            <Field name="contacts.github" component={"input"}/>
                        </label>
                        <label className={style.label}>vk:
                            <Field name="contacts.vk" component={"input"}/>
                        </label>
                        {/*<label className={style.label}>facebook:
                                                <Field name="contacts.facebook" sliderEvaluation={"input"}/>*/}
                        <Field
                            name="contacts.facebook"
                            render={({input, meta}) => (
                                <>
                                    <label className={style.label}>facebook:
                                        <input {...input} />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </label>
                                </>
                            )}
                        />
                        {/* </label>*/}
                        <label className={style.label}>instagram:
                            <Field name="contacts.instagram" component={"input"}/>
                        </label>
                        <label className={style.label}>twitter:
                            <Field name="contacts.twitter" component={"input"}/>
                        </label>
                        <label className={style.label}>website:
                            <Field name="contacts.website" component={"input"}/>
                        </label>
                        <label className={style.label}>youtube:
                            <Field name="contacts.youtube" component={"input"}/>
                        </label>
                        <label className={style.label}>mainLink:
                            <Field name="contacts.mainLink" component={"input"}/>
                        </label>
                        {
                            error && <span className={style.errorSpan}>{errorMessage}</span>
                        }
                    </div>
                    <button className={style.button} type="submit">Save</button>
                </form>
            )}

        />
    )
}

export default ProfileSetDataForm;
