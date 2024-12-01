const {useState,useEffect}=React

function App(){

    const [users,setUsers]=useState([])
    const [first_name, setFirstname] =useState('');
    const [last_name, setLastname] =useState('');
    const [email, setEmail] =useState('');
    const [editingIndex, setEditingIndex] =useState(null);

    useEffect(() => {
        fetch('https://reqres.in/api/users') 
          .then(response => response.json())
          .then(data => setUsers(data.data))
       
        
      }, []);


      const addUser = () => {
        setUsers([...users, {id: Date.now(), first_name: first_name, last_name: last_name, email : email}]);
        setFirstname('');
        setLastname('');
        setEmail('');
       };

       const handleDeleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
         setUsers(updatedUsers);
         };

         const editUser = (index) => {
            setFirstname(users[index].first_name);
            setLastname(users[index].last_name);
            setEmail(users[index].email);
            setEditingIndex(index);
        };

        const handleAddOrUpdateUser = () => {
             if (editingIndex !== null) {
                        // Mise à jour de l'utilisateur existant
             const updatedUsers = users.map((user, index) => {
             if (index === editingIndex) {
             return { first_name, last_name, email };
             }
             return user;
             });
             setUsers(updatedUsers);
             setEditingIndex(null);
             } else {
                        // Ajout d'un nouvel utilisateur
             setUsers([...users, { first_name, last_name, email  }]);
             }
             setFirstname('');
             setLastname('');
                    setEmail('');
             };
        
      return(
        <div className="admin">
            <div class='title'>
                <h2>Mes Contacts</h2>
            </div>
            <div class='adminContainer'>
            <div class='userList'>
            <table>
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">LAST NAME</th>
                        <th scope="col">EMAIL</th>
                    </tr>
                </thead>
             <tbody>
                {users.map((user,index) => (
                    <tr key={user.id}>
                    
                    <td>{user.first_name} </td>
                    <td>
                        {user.last_name}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td >
                        <i class="fa-solid fa-pen" onClick={() => editUser(index)} id="edit"></i>
                    </td>
                    <td >
                    
                        <i class="fa-solid fa-trash" onClick={() => handleDeleteUser(index)} id="delete"></i>
                        
                    </td>
                    </tr>
                    ))}
            </tbody>
            </table>
            </div>
         

            <div class='form'>
                <input 
                    type="text" 
                    placeholder="firstname"
                    value={first_name} 
                    onChange={(e) => setFirstname(e.target.value)} 
                />
                <input
                    type="text" 
                    placeholder="lastname"
                    value={last_name} 
                    onChange={(e) => setLastname(e.target.value)}   
                />
                <input 
                    type="email" 
                    placeholder="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}  
                />
               {editingIndex === null ? (
                <button onClick={addUser} className="adminButton">Ajouter Utilisateur</button>
                ) : (
                <button onClick={handleAddOrUpdateUser} className="adminButton">Mettre à Jour Utilisateur</button>
                )}
            </div>
            </div>
           
        </div>
      )

}

ReactDOM.render(<App />,document.getElementById('root'))