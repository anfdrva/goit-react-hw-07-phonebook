import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export default function App() {
  return (
    <div>
      <ContactForm />
      <Filter/>
      <ContactList/>
    </div>
  )
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
