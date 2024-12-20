import { useState } from 'react'
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId , setSelectedContactId  }) { 

    const [contact, setContact] = useState(null);

   useEffect(() => {
        
        async function fetchContacts() {
          try {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContact(result);
            console.log("SelectedContact.jsx: result: " , result);
    
          } catch (error) {
            console.error(error);
          }
        }
        fetchContacts();
      }, []);
    
    
      return ( 
        <button onClick={() => setSelectedContactId(null)}>Back to List</button>
        ); 
    }