import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
const LoggedInQuitError = (
    message = "Log Out before quit"
) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        //Detecting browser closing
        window.onbeforeunload = isLoggedIn && (() => message);

        return () => {
            window.onbeforeunload = null;
        };
    }, [isLoggedIn]);

    const routerPrompt = <Prompt when={isLoggedIn} message={message} />;

    return [routerPrompt, () => setLoggedIn(true), () => setLoggedIn(false)];
};

export default LoggedInQuitError;
