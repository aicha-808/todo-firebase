import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../Firebase'
import viewImg from '../img/eye.png';
import editImg from "../img/edit.png";
import deletImg from '../img/delet.png';


const Tasks = ({handleDelete}) => {
    // state
    const [todos, setTodos] = useState([])

    // comportements
    useEffect(() => {
        const q = query(collection(db, 'todos'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setTodos(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
        })
    },[])

    return (<> 
        <div className='d-flex justify-content-around'>
            <span >Customer Détails</span>
            <div class="input-group ">
                {/* <span class="input-group-text" >@</span> */}
                <input type="search" class="rounded-5 px-3" placeholder="search"/>
            </div>
        </div>
        <table class="table  table-bordered ">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Adress</th>
                <th scope="col">City</th>
                <th scope="col">Pin Code</th>
                <th scope="col">Country</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            {todos && 
                todos.map((todo) => (
                <tr key={todo.id} id={todo.id}>
                    <th scope="row">1</th>
                    <td>{todo.data.name}</td>
                    <td>{todo.data.adress}</td>
                    <td>{todo.data.city}</td>
                    <td>{todo.data.pcode}</td>
                    <td>{todo.data.country}</td>
                    <td>
                        <img src={viewImg} onClick={() => handleDelete(todo.id)} alt='voir'/>
                        <img src={editImg} onClick={() => handleDelete(todo.id)} alt='edit'/>
                        <img src={deletImg} onClick={() => handleDelete(todo.id)} alt='delete'/>
                    </td>
                </tr>
                ))
            }
               
            </tbody>
        </table>
    </>
     );
}
 
export default Tasks;