import { useMediaQuery } from "@mui/material";
import data from "./data.json"

export const Rights = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#ffffff",
            width: "100vw",
            height: isMobile ? "65vh" : "160vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        box: {
            width: isMobile ? "70%" : "80%",
            height: "auto",
            display: "flex",
            flexDirection: isMobile ? "row" : "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2.5vh"
        },

        textBox: {
            width: isMobile ? "90%" : "100%",
            height: "80%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "left"
        },

        title: {
            width: isMobile ? "90%" : "100%",
            margin: 0
        },

        subtitle: {
            width: "100%",
            fontWeight: 100,
            margin: "0 0 2vh 0"
        },

        text: {
            width: isMobile ? "50%" : "100%",
            display: "flex",
            flexDirection: "column"
        },

        description: {
            width: "90%",
            fontWeight: 100
        },

        imageBox: {
            width: isMobile ? "40%" : "80%",
            height: "100%",
            display: "flex",
            margin: isMobile ? 0 : "5vh 0 5vh 0", 
            alignItems: "center"
        },

        image: {
            width: "100%"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>Principais direitos do segurado:</h1>
                    <h2 style={styles.subtitle}>Conhecimento, experiência e comprometimento</h2>

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