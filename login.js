const {useState}=React

/*const usersDB=[
    {username : 'user1', password : 'pass1'},
    {username : 'user2', password : 'pass2'},
];

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [errorMessage, setErrorMessage]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        //const user=usersDB.find(u= u.username===username && u.password === password);

        if(username==='israel' && password==="password"){
            window.location.href="maPage.html";
        }else{
            setErrorMessage("nom ou mot de pass incorect")
        }
    }
    return(
        <div>
            <h2>Formulaire de connexion</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required
                />

            <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />

                <button type="submit">se connecter</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}

ReactDOM.render(<Login/>,document.getElementById('root'))*/
const usersDB=[]

function App(){
    const [isLogin,setIslogin]=useState(true)


    return(<div>
        {isLogin ? (<Login setIsLogin={setIslogin}/>):(<Signup setIsLogin={setIslogin}/>)}
    </div>)
}

    function Signup({ setIsLogin }) {
            const [username, setUsername] = React.useState('');
            const [password, setPassword] = React.useState('');
            const [errorMessage, setErrorMessage] = React.useState('');
    
            const handleSubmit = (e) => {
                e.preventDefault();
                const userExists = usersDB.find(u => u.username === username);
    
                if (userExists) {
                    setErrorMessage("Ce nom d'utilisateur est déjà pris.");
                } else {
                    usersDB.push({ username, password });
                    alert("Compte créé avec succès !");
                    setIsLogin(true); // Redirige vers le formulaire de connexion
                }
            };
    
            return (
                <div className="login">
                    <div className="loginContainer">
                      <h2>Créer un Compte</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Nom d'utilisateur" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Mot de passe" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit" className="seConnecter">Créer un Compte</button>
                    </form>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <p className="pasDeCompte">Avez-vous un compte ? <span onClick={() => setIsLogin(true)} className="creerCompte">Se connecter</span></p>
                    </div>
           
                </div>
            );
        }



       function Login({ setIsLogin }) {
                const [username, setUsername] = React.useState('');
                const [password, setPassword] = React.useState('');
                const [errorMessage, setErrorMessage] = React.useState('');
        
                const handleSubmit = (e) => {
                    e.preventDefault();
                    const user = usersDB.find(u => u.username === username && u.password === password);
        
                    if (user) {
                        // Redirection vers maPage.html
                        window.location.href = "monCarnet.html";
                    } else {
                        setErrorMessage("Nom d'utilisateur ou mot de passe incorrect.");
                    }
                };
        
                return (
                    <div className="login">
                        <div className="loginContainer">
                         <h2>CONNEXION</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Nom d'utilisateur" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder="Mot de passe" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <button type="submit" className="seConnecter">Se connecter</button>
                        </form>
                        {errorMessage && <p className="error">{errorMessage}</p>}
                        <p className="pasDeCompte">Vous n'avez pas de compte ? <span onClick={() => setIsLogin(false)} className="creerCompte">Créer un Compte</span></p>
                        </div>
           
                    </div>
                );
            }

    ReactDOM.render(<App/>,document.getElementById('root'))

    