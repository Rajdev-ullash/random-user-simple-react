import React from 'react';

const User = (props) => {
    const { picture, name,gender, email, location } = props.user;
    const allStyle = { border: '1px solid red', borderRadius: '10px', boxShadow: '0px 0px 10px grey', width:'400px' ,justifyContent: 'center', alignItems: 'center', margin: '5px', backgroundColor: 'powderBlue', color: '#000000'}
    const textStyle = {margin:'5px', padding:'5px'}
    const handleAddPeople = props.handleAddPeople;
    return (
        <div style={allStyle}>
            <div style={textStyle}>
                <img src={picture.medium} alt=""  style={{borderRadius: '50%', height: '100px'}}/>
                <h3>Name: {name.title} {name.first} {name.last}</h3>
                <p>Email: {email}</p>
                <p>Gender: {gender}</p>
                <p>Country: {location.country}</p>
                <p>City: {location.city}</p>
                <p>State: {location.state}</p>
                <button onClick={() => handleAddPeople(props.peoples)} style={{height:'30px', width:'100px', backgroundColor:'orange', borderRadius:'5px'}}>Add people</button>
            </div>
        </div>
    );
};

export default User;