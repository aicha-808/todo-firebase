const AddTodo = ({handleSubmit,name, adress, id, setId, city, pcode, country, setName, setAdress, setCity, setPcode, setCountry, nameButon}) => {
    
    return ( 
        <form onSubmit={handleSubmit} className='container pt-3'>
            <div class="row">
                <div class="col-sm-6 mb-3">
                    <label >#</label> <br/> 
                    <input type="number" placeholder='#' value={id} 
                    onChange={(e) => setId(e.target.value)} required />
                </div>
                <div class="col-sm-6 mb-3">
                    <label >Name</label> <br/> 
                    <input type="text" placeholder='name' value={name} 
                    onChange={(e) => setName(e.target.value)}required />
                </div>
                <div class="col-sm-6 mb-3">
                    <label >Adress</label><br/> 
                    <input type="text" placeholder='adresse' value={adress} 
                    onChange={(e) => setAdress(e.target.value)} required/>
                </div>
                <div class="col-sm-6 mb-3">
                        <label >City</label><br/> 
                        <input type="text" placeholder='city' value={city} 
                        onChange={(e) => setCity(e.target.value)} required/>
                </div>
                <div class="col-sm-6 mb-3">
                    <label >Pin Code</label><br/> 
                    <input type="number" placeholder='Pin code' value={pcode} 
                    onChange={(e) => setPcode(e.target.value)} required/>
                </div>
                <div class="col-sm-6 mb-3">
                    <label >Country</label><br/> 
                    <input type="text" placeholder='country' value={country} 
                    onChange={(e) => setCountry(e.target.value)}required />
                </div>
            </div>
            <p className="text-center"><button className='btn btn-success'>{nameButon}</button></p>
        </form>
     );
}

export default AddTodo;