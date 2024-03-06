import React, { useState } from 'react';
import { db } from '../Firebase';
import {collection, addDoc, Timestamp, doc, deleteDoc} from 'firebase/firestore';
import AddTodo from "./AddTodo";
import Tasks from './Tasks';

const TodoSubjet = () => {
    // states for the input
    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [pcode, setPcode] = useState("");
    const [country, setCountry] = useState("");

    // Comportements
    const  handleSubmit = async (e) => {
        e.preventDefault();
        if (name !== "") {
           try{
            await addDoc(collection(db, 'todos'),{
                name,
                adress,
                city,
                pcode,
                country,
                completed: false,
                created: Timestamp.now() 
            })
            alert("success")
           } catch(err){
            alert(err)
           }
        }
    } 
    const handleDelete = async (id) => {
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

    return ( 
        <div className="container p-5">
        <div className="row">
            <div className="col-sm-10 mx-auto">
                <h1 className="">Todo Application</h1>
                <AddTodo name={name} setName={setName} handleSubmit={handleSubmit}
                adress={adress} setAdress={setAdress} city={city} setCity={setCity}
                pcode={pcode} setPcode={setPcode} country={country} setCountry={setCountry}/>
                <Tasks handleDelete={handleDelete} />
            </div>
        </div>
        </div>
     );
}
 
export default TodoSubjet;