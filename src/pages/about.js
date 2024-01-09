import { graphql, Link } from "gatsby";
import * as React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/Navbar";

const aboutPage = (props) => {
    console.log(props);
    const aboutNode = props.data.allContentfulAbout.nodes[0];
    const aboutName = aboutNode.name;
    const imageUrl = props.data.allContentfulAbout.nodes[0].portrait.file.url;

    const styles = {
        main: {
            textAlign: "center",
            padding: "20px",
        },
        heading: {
            color: "green",
        },

        image: {
            maxWidth: "100%",
            height: "auto",
            marginTop: "20px",
        },
    };

    return (
        <>
            <Navbar />
            <main style={styles.main}>
                <h1 style={styles.heading}>Hello</h1>
                <h2>{aboutName}</h2>
                <img src={imageUrl} alt="Portrait" style={styles.image} />
                <article>
                    {documentToReactComponents(
                        JSON.parse(
                            props.data.allContentfulAbout.nodes[0].aboutText.raw
                        )
                    )}
                </article>
                <Link to="/">Start</Link>
            </main>
        </>
    );
};

export const query = graphql`
    query AboutQuery {
        allContentfulAbout {
            nodes {
                name
                portrait {
                    file {
                        url
                    }
                }
                aboutText {
                    raw
                }
            }
        }
    }
`;

export default aboutPage;
