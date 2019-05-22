import React from 'react';
import Food from './Food';
import OrderElement  from './OrderElement'


class MenuDisplay extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            orderList : []
        };
        this.onHandleOrder = this.onHandleOrder.bind(this);
    }

    onHandleOrder(food){
        let newOrderList = this.state.orderList;
        newOrderList.push(food);
        this.setState({orderList: newOrderList});
    }

    onRemove(index){
        let orderList = this.state.orderList;

        let newOrderList = [
            ...orderList.slice(0, index),
            ...orderList.slice(index + 1)
        ];
        this.setState({orderList: newOrderList});
    }

    render(){
        let menuList = [];

        for (let index = 0; index < this.props.menuList.length; index++) {
            const food = this.props.menuList[index];
             //TODO: add a property key https://reactjs.org/docs/lists-and-keys.html#keys
            menuList.push(<div>
                <Food
                    key = {food.id}
                    food = {food}
                    onHandleOrder = {this.onHandleOrder}
                />
                </div>);
        }

        return <div className="MenuDisplay">
            <div className="MenuList">
                <ol>
                    {menuList}
                </ol>
            </div>
            <div className="container">
                <ol>
                {this.state.orderList.map((food, index) => {
                        return (
                            <OrderElement
                                key={food.id + "_" + index.toString()}
                                food={food}
                                onClickRemove={()=>this.onRemove(index)}
                            />);
                    })}
                </ol>
            </div>
        </div>;
    }
}

export default MenuDisplay;