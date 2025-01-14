import { useMediaQuery } from "@mui/material";
import data from "./data.json"

export const Values = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#efefef",
            width: "100vw",
            height: isMobile ? "65vh" : "130vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        box: {
            width: isMobile ? "60%" : "100%",
            height: "100%",
            display: "flex",
            flexDirection: isMobile ? "" : "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2.5vh"
        },

        textBox: {
            width: "55%",
            height: "80%",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
        },

        title: {
            margin: 0
        },

        subtitle: {
            width: "100%",
            fontWeight: 100,
            margin: isMobile ? "0 0 2vh 0" : "0 0 5vh 0"
        },

        text: {
            width: isMobile ? "50%" : "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: isMobile ? "left" : "center"
        },

        description: {
            width: isMobile ? "80%" : "100%",
            fontWeight: 100
        },

        imageBox: {
            width: isMobile ? "40%" : "100%",
            height: isMobile ? "100%" : "30%",
            marginTop: isMobile ? "" : "1.2vh"
        },

        image: {
            width: "100%",
            height: "100%",
            objectFit: isMobile ? "" : "cover"
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

                    <img style={styles.image} src="https://rutzen.adv.br/wp-content/uploads/2022/03/Mask-group.png" />

                </div>

            </div>

        </div>
    );
}