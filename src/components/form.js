import React from "react";

const Form = (props) => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Місто"/>
        <button>Вперед!</button>
    </form>
)

export default Form;