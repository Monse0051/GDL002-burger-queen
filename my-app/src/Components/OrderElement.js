import React from 'react';

class OrderElement extends React.Component{

    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);

    }

    onDelete(){
        this.props.onClickRemove();
    }

    render() {
        return <div className="OrderElement">
                    <h3>{this.props.food.descripcion}</h3>
                    <button onClick={this.onDelete}>Eliminar</button>
                </div>;
    }
}

export default OrderElement;