import React from "react";
import "./User.css";

export const UserData = {
    firstName: "Shivaratnakumar",
    lastName: "Patil",
    age: 30,
    email: "shivaratan@example.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    designation: "Software Engineer"
}

export default function User() {
    return (
        <div className="user">
            <h1>{UserData.firstName} {UserData.lastName}</h1>
            <p>{UserData.designation}</p>
        </div>
    );
}