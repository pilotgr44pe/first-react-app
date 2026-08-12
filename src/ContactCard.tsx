type ContactCardProps = {
    name: string
    email: string
}

function ContactCard({ name, email}: ContactCardProps){
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '5px'}}>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default ContactCard