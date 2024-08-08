import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";


function App(){
    const [firstName, setFirstName] = useState("Eustache");
    const [lastName, setLastName] = useState("Katembo");

    return (
        <>
            <Form firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} />
            <DisplayData firstName={firstName} lastName={lastName} />
        </>
    )
}

export default App;