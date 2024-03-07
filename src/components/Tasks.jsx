import {useState, useEffect, useId} from 'react';
import {Link, useParams} from 'react-router-dom';
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from '../Firebase'
import viewImg from '../img/eye.png';
import editImg from "../img/edit.png";
import deletImg from '../img/delet.png';
// import updateTodo from './updateTodo';


const Tasks = ({handleDelete, handleUpdate}) => {
    // state
    const [todos, setTodos] = useState([])
    const id = useParams()
    console.log(id);
    // comportements
    useEffect(() => {
        const q = query(collection(db, 'todos'), orderBy('created', 'asc'))
        onSnapshot(q, (querySnapshot) => {
            setTodos(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
        })
    },[])

    return (<> 
        <div className='d-flex justify-content-between mt-5'>
            <span >Customer Détails</span>
            <input type="search" class="rounded-5 text-center " placeholder="search"/>
        </div>
        <table class="table  table-bordered mt-3">
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
                    <th scope="row">{todo.id}</th>
                    <td>{todo.data.nom}</td>
                    <td>{todo.data.adress}</td>
                    <td>{todo.data.city}</td>
                    <td>{todo.data.pcode}</td>
                    <td>{todo.data.country}</td>
                    <td>
                       <Link to={`users/${todo.id}`}><img src={viewImg} alt='voir'/></Link> 
                        <img src={editImg} onClick={() => handleUpdate(todo.id)} alt='edit'/>
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