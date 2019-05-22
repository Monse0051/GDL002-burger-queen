import React from 'react';
import MenuType from './Components/MenuType';

const comidas = [
  {
    type: "Hamburguesa", descripcion:"Hamburguesa simple", 
    sabor:{
      eleccion:"res", 
      opciones:["res", "pollo", "vegetariana"]
    }, 
    extra:{
      costo: 1.0,
      eleccion:"",
      opciones: ["huevo", "queso"]
    },  
    precio: 10.00
  },

  {
    type: "Hamburguesa", descripcion:"Hamburguesa doble", 
    sabor:{
      eleccion:"res", 
      opciones:["res", "pollo", "vegetariana"]
    }, 
    extra:{
      costo: 1.0,
      eleccion:"",
      opciones: ["huevo", "queso"]
    },  
    precio: 15.00
  },

  {
   type : "acompañamiento",
    precio: 5.00,
    descripcion: "papas fritas"
  },
  
  {
    type: "bebida",
    precio: 5.00,
    descripcion: "agua 500ml"
    
  },
  {
    type: "bebida",
    precio: 7.00,
    descripcion: "agua 750ml"
  },

  {
    type: "bebida",
    precio: 7.00,
    descripcion: "bebida/gaseosa 500ml"
  }
];


class App extends React.Component {

  constructor(props){
    super(props);
    this.ID = "vMH5efLYsj23yjapA3rf";
    this.state = {
      error: null,
      isLoaded: false,
      menu: {}
    };
  }

  componentDidMount(){
    // TODO: firebase conexion
    const firebase = require("firebase");
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCjy0hWWi5gvz23Pm87OmnWA00vLSjx-SA",
      authDomain: "burguer-queen-24934.firebaseapp.com",
      databaseURL: "https://burguer-queen-24934.firebaseio.com",
      projectId: "burguer-queen-24934",
      storageBucket: "burguer-queen-24934.appspot.com",
      messagingSenderId: "338402146466",
      appId: "1:338402146466:web:deef35a2e34880bb"
    };
    // Initialize Firebase
    let app = firebase.initializeApp(firebaseConfig);

    const dataBase = app.firestore();
    let menuRef = dataBase.collection("Menu").doc(this.ID);

    menuRef.get()
      .then(menu =>{
        if (!menu.exists) {
          console.log('Menu not found in firebase!');
        } else {
          console.log('Document data:', menu.data());
          this.setState({
            isLoaded: true,
            menu: menu.data()
          });
        }
      }, 
      error=>{
        this.setState({
          isLoaded: true,
          error
        })
      });
  }

  render() {
    const { error, isLoaded, menu } = this.state;
    // TODO: handle error and isLoaded === false
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Burguer-Queen">
          <div className="numero de mesa">
            <input></input>
          </div>

          <div className="Menus">
            <MenuType
              menu={menu}
              id = {this.ID}
            />
          </div>

        </div>
      );
    }
  }
}

export default App;
