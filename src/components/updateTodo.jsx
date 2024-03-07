import {updateDoc,doc} from 'firebase/firestore';
import {db} from '../Firebase';
import AddTodo from './AddTodo';

const updateTodo = ({nom, adress, city, pcode, country}) => {
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
    return ( <AddTodo handleUpdate={handleUpdate} /> );
}
 
export default updateTodo;