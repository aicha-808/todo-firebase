const AddTodo = ({handleSubmit,name, adress, city, pcode, country, setName, setAdress, setCity, setPcode, setCountry}) => {
    
    return ( 
        <form onSubmit={handleSubmit} className='container pt-3'>
            <div class="row">
                <div class="col-sm-6 mb-3">
                    <label >Name</label> <br/> 
                    <input type="text" placeholder='name' value={name} 
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="col-sm-6 mb-3">
                    <label >Adress</label><br/> 
                    <input type="text" placeholder='adresse' value={adress} 
                    onChange={(e) => setAdress(e.target.value)} />
                </div>
                <div class="col-sm-6 mb-3">
                        <label >City</label><br/> 
                        <input type="text" placeholder='city' value={city} 
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div class="col-sm-6 mb-3">
                    <label >Pin Code</label><br/> 
                    <input type="text" placeholder='Pin code' value={pcode} 
                    onChange={(e) => setPcode(e.target.value)} />
                </div>
                <div class="col-sm-6 mb-3">
                    <label >Country</label><br/> 
                    <input type="text" placeholder='country' value={country} 
                    onChange={(e) => setCountry(e.target.value)} />
                </div>
            </div>
            <p className="text-center"><button className='btn btn-success'>Add +</button></p>
        </form>
     );
}

export default AddTodo;