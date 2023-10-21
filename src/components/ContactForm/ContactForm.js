// import { useState } from 'react';
// import { addContactsCreate } from 'redux/contacts/contactsOperation';
// import { getContacts } from 'redux/contacts/contactsSelectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { Formik, Field} from "formik";
// import * as Yup from 'yup';
// import { StyledForm, Label, StyledErrorMessage, AddContactBtn } from "./ContactForm.styled";

// const SignupSchema = Yup.object().shape({
//    name: Yup.string().matches( /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required('Required'),
//    number: Yup.string().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required('Required'),
//  });

// export default function ContactForm() {
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');

//     const contacts = useSelector(getContacts);
//     const dispatch = useDispatch();

//     const nameId = nanoid();
//     const numberId = nanoid();

//     const handleChangeForm = (e) => {
//         const { name, value } = e.currentTarget;

//         switch (name) {
//             case "name":
//                 setName(value);
//                 break;
//             case "number":
//                 setNumber(value);
//                 break;
//             default: return;
//         }
//     }

//     const handleFormSubmit = async(values) => {
//         // e.preventDefault()

//         const addNewContact = { name: values.name, number: values.number, id: nanoid() };

//         if (contacts.find(
//             contact => name.toLowerCase() === contact.name.toLowerCase()
//         )) {
//             alert(`${values.name} is already in contacts`)
//         } else {
//             // dispatch(addContactsCreate(addNewContact))
//             // setName('')
//             // setNumber('')
//             try {
//                 await dispatch(addContactsCreate(addNewContact))
//             setName('')
//             setNumber('')
//             } catch (error) {
//                 console.error('error', error)
//             }
//         }
//     }

//     return (
//         <Formik
//             initialValues={{
//                 name: "",
//                 number: ""
//             }}
//             validationSchema={SignupSchema}
//             onSubmit={handleFormSubmit}
//         >
//             {({ handleSubmit }) => (
//                 <StyledForm onSubmit={handleSubmit}>
//                     <Label htmlFor={nameId} onChange={handleChangeForm}>
//                         Name
//                         <Field name="name" type="text" />
//                         <StyledErrorMessage name="name" component="div"/>
//                     </Label>
//                     <Label htmlFor={numberId} onChange={handleChangeForm}>
//                         Number
//                         <Field name="number" type="tel" />
//                         <StyledErrorMessage name="number" component="div"/>
//                     </Label>
//                     <AddContactBtn type="submit">Add contact</AddContactBtn>
//                 </StyledForm>
//             )}
//         </Formik>
//     )
// }


// import { useState } from 'react';
import { addContactsCreate } from 'redux/contacts/contactsOperation';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Field} from "formik";
import * as Yup from 'yup';
import { StyledForm, Label, StyledErrorMessage, AddContactBtn } from "./ContactForm.styled";

const SignupSchema = Yup.object().shape({
   name: Yup.string().matches( /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required('Required'),
   number: Yup.string().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required('Required'),
 });

export default function ContactForm() {
    // const [name, setName] = useState('');
    // const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const nameId = nanoid();
    const numberId = nanoid();

    const handleFormSubmit = async(values, {resetForm}) => {
        const { name, number } = values;
        const addNewContact = { name, number, id: nanoid() };

        if (contacts.find(
            contact => name.toLowerCase() === contact.name.toLowerCase()
        )) {
            alert(`${values.name} is already in contacts`)
        } else {
            try {
                await dispatch(addContactsCreate(addNewContact));
                resetForm();
            } catch (error) {
                console.error('error', error)
            }
        }
    }

    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={handleFormSubmit}
        >
            {({ handleSubmit }) => (
                <StyledForm onSubmit={handleSubmit}>
                    <Label htmlFor={nameId} >
                        Name
                        <Field name="name" type="text" />
                        <StyledErrorMessage name="name" component="div"/>
                    </Label>
                    <Label htmlFor={numberId} >
                        Number
                        <Field name="number" type="tel" />
                        <StyledErrorMessage name="number" component="div"/>
                    </Label>
                    <AddContactBtn type="submit">Add contact</AddContactBtn>
                </StyledForm>
            )}
        </Formik>
    )
}

