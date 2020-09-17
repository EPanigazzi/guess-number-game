import React from "react";

import { Button, DialogTitle, DialogContent, Dialog } from "@material-ui/core";

class Info extends React.Component {
    state = { open: false };

    onToggle = () => this.setState({ open: !this.state.open }); //abra y cierra

    render() {
        const { open } = this.state;

        return (
            <React.Fragment>
                <Dialog open={open} onClose={this.onToggle}>
                    <DialogTitle>Game Rules</DialogTitle>
                    <DialogContent>
                        This is a Number guessing game with the following rules:
                        <ol>
                            <li>
                                The machine picks a random number between 1 to
                                100 and keeps it hidden.
                            </li>
                            <li>
                                You need to guess until you can find the hidden
                                secret number.
                            </li>
                            <li>
                                You will get feedback on how close or far your
                                guess is in the form of the followin keyywords
                                ("Cold", "Warm", "Hot", "Extremely hot")
                            </li>
                        </ol>
                        <p>Everything clear?</p>
                    </DialogContent>
                    <Button onClick={this.onToggle}>YES</Button>
                </Dialog>
                <Button fullWidth variant="contained" color="primary" onClick={this.onToggle} >How to play</Button>
            </React.Fragment>
        );
    }
}

export default Info;
