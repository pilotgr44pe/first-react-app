import ContactCard from './ContactCard'
import LikeButton from './LikeButton'

type Contact = {
  id: number
  name: string
  email: string
}

function App() {
  const contacts: Contact[] = [
    { id: 1, name: "Alice Tan", email: "alice@example.com"},
    { id: 2, name: "Bob Lim", email: "bob@example.com"},
    { id: 3, name: "Charlie Wong", email: "charlie@example.com"}
  ]
  return (
    <>
      <h1>Contacts</h1>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} name={contact.name} email={contact.email} />
      ))}
    </>
  )
}



export default App