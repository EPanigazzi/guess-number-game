import React from "react";

import { Grid, Typography, Paper, Divider, Button } from "@material-ui/core";
import { getFeedback, getInitialState } from "./util";
import { Form, Info, Progress } from "./components";

import './App.css'

class App extends React.Component {
    state = getInitialState();

    resetGame = () => this.setState(getInitialState());

    //Obtenemos el numero ingresado por el usuario desde el componente Form
    updateAppState = (guess) => {
        const { actual } = this.state;

        const absDiff = Math.abs(guess - actual);
        const { feedbackMessage, feedbackColor } = getFeedback(absDiff);

        //De esta forma obtengo el estado anterior de mis variables y luego las actualizo
        this.setState((prevState) => ({
            guess,
            allGuesses: [...prevState.allGuesses, { guess, feedbackColor }],
            attempt: prevState.attempt + 1,
            feedbackMessage,
            block: absDiff === 0,
        }));
    };

    render() {
        const {
            allGuesses,
            feedbackMessage,
            block,
            attempt,
            feedbackColor,
        } = this.state;

        //Creo un array nuevo con la lista de numeros ingresados por la persona
        const guessList = allGuesses.map((item, index) => (
            <li key={index}>
                <span>{item.guess}</span>
            </li>
        ));

        return (
            <section>
                <Grid
                    container
                    style={{ height: "100vh" }}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Paper style={{ padding: "50px" }} elevation={6}>
                            <Typography
                                align="center"
                                variant="h2"
                                gutterBottom
                            >
                                HOT or COLD
                            </Typography>
                            <Divider style={{ margin: "20px 0" }} />
                            <Form
                                block={block}
                                returnGuessToApp={(value) =>
                                    this.updateAppState(value)
                                }
                            />
                            <Progress
                                feedbackMessage={feedbackMessage}
                                feedbackColor={feedbackColor}
                                attempt={attempt}
                                guessList={guessList}
                            />
                            <Button
                                style={{ marginBottom: "15px" }}
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.resetGame}
                            >
                                Reset Game
                            </Button>
                            <Info/>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
        );
    }
}
export default App;
