import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const ErrorCom = (): JSX.Element => {
    const error = useRouteError() as Error;

    return (
        <React.Fragment>
            <main id="error">
                <h1>That Page doesn't exist!  👿</h1>
                <pre>{error.message}</pre>
                <Link to="/">
                    <button>Home Page</button>
                </Link>
            </main>
        </React.Fragment>
    );
};


