import React from 'react';
import './OrderKitchen.css';



class OrderKitchen extends React.Component {

    render(){
        return <div className="jumbotron kitchen">
            <ul>
                {this.props.descriptionList.map(element=>{
                    return (
                        <div className = "elementKitchen"><li>{element.descripcion}</li>
                        </div>
                    );
                })}
            </ul>
            <button className= "btn btn-outline-info btn-listo">listo</button>
                
        </div>;
    }
}

export default OrderKitchen;