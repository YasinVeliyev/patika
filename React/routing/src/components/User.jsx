import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';

class User extends Component {
    constructor(props){
        super(props)
        this.userId=12
        this.state={data:{}}
        console.log(this.props)
    
    }

    componentDidMount() {
        fetch(`https://dummyjson.com/users/${this.userId}`)
            .then((res) => res.json())
            .then((data) => {
                this.setState((state)=>{
                    return { data }
                });
            });
    }
    render() {
        return(
            <div>
                 <div>{JSON.stringify(this.state.data)}</div>
            </div>
        )
    }
}

const UserWrapper = () => {
  const navigate = useNavigate();
  console.log(navigate)
  
};


export default User;
