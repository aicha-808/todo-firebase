import React, { useState } from 'react';
import { db } from '../Firebase';
import {Timestamp, doc, deleteDoc, updateDoc, setDoc} from 'firebase/firestore';
import AddTodo from "./AddTodo";
import Tasks from './Tasks';
import updateTodo from './updateTodo';

const TodoSubjet = () => {
    // states for the input
    const [id, setId] = useState('')
    const [nom, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [pcode, setPcode] = useState("");
    const [country, setCountry] = useState("");
    // initialisé l'etat de la tache a modifiée
    const [editNameTask, setEditNameTask] = useState(null)
    const [openAddModal, setOpenAddModal] = useState(false)

    function cleanInput() {
      setName('');
      setAdress('');
      setCity('');
      setPcode('');
      setCountry('');
      setId('');
    }
      // Comportements
    const  handleSubmit = async (e) => {
      e.preventDefault();
      if (nom !== "") {
        try{
          await setDoc(doc(db, 'todos', id),{
              id,
              nom,
              adress,
              city,
              pcode,
              country,
              created: Timestamp.now() 
          })
          alert("success")
        } catch(err){
          alert(err)
        }
      }
      cleanInput()
    } 
    const handleDelete = async (id) => {
        console.log("tache supprimée");
        const todosDocRef = doc(db, 'todos', id)
        try{
          await deleteDoc(todosDocRef)
        } catch (err) {
          alert(err)
        }
    }
    const handleUpdate = async (id) => {
      const todosDocRef = doc(db, 'todos', id);
      const data = {
        nom, adress, city, pcode, country
      }
      try {
        await updateDoc(todosDocRef, data)
      }catch(err){
        alert(err)
      }
    }
    
    return ( 
        <div className="container p-5">
        <div className="row">
            <div className="col-sm-10 mx-auto text-center">
                <h1 className="fs-5">Todo Application</h1>
                <button className='btn btn-success mt-3'
                  onClick={() => setOpenAddModal(true)}>
                  Add task +
                </button>
                {openAddModal &&
                <AddTodo name={nom} setName={setName} handleSubmit={handleSubmit} id={id} 
                adress={adress} setAdress={setAdress} city={city} setCity={setCity}
                pcode={pcode} setPcode={setPcode} country={country} setCountry={setCountry} setId={setId}
                nameButon={editNameTask? 'edite': 'Add'} editNameTask={editNameTask}
                />
                }
                <Tasks handleDelete={handleDelete} handleUpdate={handleUpdate} />
            </div>
        </div>
        </div>
     );
}
 
export default TodoSubjet;