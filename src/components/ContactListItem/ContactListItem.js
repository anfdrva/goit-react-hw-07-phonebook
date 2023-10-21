import { useDispatch } from "react-redux";
import { removeContactsCreate } from "redux/contacts/contactsOperation";
import { ContactItem, DeleteContactBtn } from "./ContactListItem.styled";

const ContactListItem = ({ id, number, name }) => {
    const dispatch = useDispatch();

    const removeButton = () => {
        dispatch(removeContactsCreate(id));
    }
    return (
        <ContactItem key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <DeleteContactBtn type="button" onClick={removeButton}>Delete</DeleteContactBtn>
        </ContactItem>
    )
};

export default ContactListItem;