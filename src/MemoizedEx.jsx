import React, { useState, memo } from 'react'

function MemoizedEx() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <>
            <form action="">
                <fieldset>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="off" placeholder='Enter first name' />
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="off" placeholder='Enter last name' />

                </fieldset>
            </form>
            {/* <Greeting firstName={firstName} lastName={lastName} /> */}
            <Greeting name={firstName} />

        </>

    );
}

// const Greeting = ({ name }) => {
//     console.log("Greeting rendered ", new Date().toString());
//     // console.log(props.firstName, props.lastName);
//     return <h1>Hello {name}!</h1>
// };

// const Greeting = (props) => {
//     console.log("Greeting rendered ", new Date().toString());
//     console.log(props.firstName, props.lastName);
//     return <h1>Hello {props.firstName} {props.lastName}!</h1>
// }


const Greeting = memo(({ name }) => {
    console.log("Greeting rendered ", new Date().toString());
    // console.log(props.firstName, props.lastName);
    return <h1>Hello {name}!</h1>
});

export default MemoizedEx