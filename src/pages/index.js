import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";

const IndexPage = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <h1>Start</h1>
                <p>I Like turtles</p>
                <Link to="/about">Om Mig</Link>
            </main>
        </>
    );
};

export default IndexPage;

export const Head = () => <title>Gäddan</title>;
