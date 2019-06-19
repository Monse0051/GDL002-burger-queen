import React from "react";
import firebase from 'firebase';
import OrderKitchen from './OrderKitchen';

class Cocina extends React.Component{

    constructor(props){
        super(props);
        this.database = null;
        this.state = {foodList: []};
    }

    _getTodayMilliSeconds(){
        let today = new Date();
        today.setHours(0,0,0,0);
        return today.getTime();
    }

    componentDidMount(){
        const app = firebase.app();
        this.database = app.firestore();

        let ordersRef = this.database.collection("Ordenes");
        let queryOrdersRef = ordersRef.where("date", ">=", this._getTodayMilliSeconds());
        queryOrdersRef.orderBy('date');
    
        queryOrdersRef.get().then(querySnapshoot => {
            querySnapshoot.forEach(doc => {
                console.log("DEBUG MSG: data", doc.data());

                let newfoodList = this.state.foodList;
                newfoodList.push(doc.data());
                this.setState({foodList: newfoodList});
            });
        }).catch();
    }

    
    render() {
        return <div className="cocina">
                    <ul>
                        {this.state.foodList.map(element => {
                            return (
                                <OrderKitchen
                                    key={element.date}
                                    descriptionList={element.orderList}
                                />);
                        })}
                    </ul>
                </div>;
    }
}

export default Cocina;