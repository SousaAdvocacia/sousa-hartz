import { useMediaQuery } from "@mui/material";
import data from "./data.json"

export const Values = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#efefef",
            width: "100vw",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        box: {
            width: isDesktop ? "60%" : "100%",
            height: "auto",
            display: "flex",
            flexDirection: isDesktop ? "" : "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: isDesktop ? "7.5vh" : "2.5vh"
        },

        textBox: {
            width: "55%",
            height: "80%",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginTop: isDesktop ? 0 : "2.5vh"
        },

        title: {
            margin: 0
        },

        subtitle: {
            width: "100%",
            fontWeight: 100,
            margin: isDesktop ? "0 0 2vh 0" : "0 0 5vh 0"
        },

        text: {
            width: isDesktop ? "50%" : "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: isDesktop ? "left" : "center"
        },

        description: {
            width: isDesktop ? "80%" : "100%",
            fontWeight: 100
        },

        imageBox: {
            width: isDesktop ? "40%" : "100%",
            height: isDesktop ? "100%" : "30%"
        },

        image: {
            width: "100%",
            height: isDesktop ? "" : "35vh",
            objectFit: isDesktop ? "" : "cover"
        }
    }

    return (
        <div id="institucional" style={styles.main}>

            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>Excelência para entregar a você o que temos de melhor:</h1>
                    <h2 style={styles.subtitle}>conhecimento, experiência e comprometimento</h2>

                    {data.map((item) => {
                        return (
                            <div style={styles.text}>
                                <h2 style={styles.title}>{item.title}</h2>
                                <h3 style={styles.description}>{item.description}</h3>
                            </div>
                        );
                    })}

                </div>

                <div style={styles.imageBox}>

                    <img style={styles.image} src="/office-image.jpg" />

                </div>

            </div>

        </div>
    );
}