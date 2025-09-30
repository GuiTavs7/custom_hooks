import {useFormInput} from "../../hooks/useFormInput";
import "./form.css";

export default function Form() {

    const firstNameProps = useFormInput("Guilherme");
    const lastNameProps = useFormInput("Pinheiro");

    return(
        <>
            <label className="first-label">
                First name:
                <input {...firstNameProps}/>
            </label>

            <label className="second-label">
                Last name:
                <input {...lastNameProps}/>
            </label>

            <p>
                <b>Bom dia, {firstNameProps.value} {lastNameProps.value}.</b>
            </p>
        </>
    )
}