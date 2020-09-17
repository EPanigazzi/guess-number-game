import React from "react";

import { TextField, Button } from "@material-ui/core";

const Form = ({ block, returnGuessToApp }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();

        if (!block) {
            const guess = event.target.elements.guess.value;
            event.target.elements.guess.value = ""; // limpiar el input una vez que se sumitea
            returnGuessToApp(guess); //Cuando submiteamos, ejecutamos esta funcion y le mandamos como parametro el numero tipeado
        }
    };

    return (
        <form style={{ marginTop: "20px" }} onSubmit={onFormSubmit}>
            <TextField
                style={{ paddingBottom: "20px" }}
                fullWidth
                type="number"
                name="guess"
                inputProps={{ min: "0", max: "100", step: "1" }}
                label="Enter your guess..."
                required
            />
            <Button fullWidth variant="contained" color="primary" type="submit">
                Guess
            </Button>
        </form>
    );
};

export default Form;
