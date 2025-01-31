import { Button, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const Areas = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: isMobile ? "#efefef" : "#ffffff",
            width: "100vw",
            height: isMobile ? "auto" : "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "8vh 0 8vh 0" : "4vh 0 0 0"
        },

        box: {
            backgroundColor: "#ffffff",
            width: isMobile ? "70vw" : "100vw",
            height: isMobile ? "auto" : "auto",
            borderRadius: isMobile ? 15 : 0,
            display: "flex",
            flexDirection: isMobile ? "row" : "column"
        },

        section: {
            width: isMobile ? "35%" : "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: isMobile ? 0 : "5vh"
        },

        subtitle: {
            width: isMobile ? "13vw" : "80vw",
            fontWeight: 500
        },

        title: {
            width: isMobile ? "13vw" : "80vw",
            margin: 0
        },

        description: {
            width: isMobile ? "13vw" : "80vw",
            fontWeight: 300
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isMobile ? "13vw" : "80vw",
            height: "auto",
            marginTop: "3vw",
            padding: 0,
            borderRadius: 5
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },

        colorSection: {
            backgroundColor: "#bf996f",
            width: isMobile ? "65%" : "100%",
            height: isMobile ? "auto" : "auto",
            borderTopRightRadius: isMobile ? 15 : 0,
            borderBottomRightRadius: isMobile ? 15 : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5vh 0 5vh 0"
        },

        textSection: {
            color: "#ffffff",
            width: "85%",
            height: "auto",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            flexWrap: "wrap",
            justifyContent: "center"
        },

        textBox: {
            width: isMobile ? "50%" : "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        },

        boxIcon: {
            width: "90%",
            height: "auto"
        },

        icon: {
            backgroundColor: "#ffffff",
            width: isMobile ? "2vw" : "6vw",
            height: isMobile ? "2vw" : "6vw",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.25vw"
        },

        iconImage: {
            width: isMobile ? "1.5vw" : "5vw"
        },

        boxTitle: {
            width: "90%",
            fontWeight: 500,
            margin: 0
        },

        boxDescription: {
            width: "90%",
            fontWeight: 300
        },

        boxButton: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: isMobile ? "10vw" : "40vw",
            height: isMobile ? "4.5vh" : "4vh",
            fontSize: isMobile ? "" : "12px",
            borderRadius: 5,
            padding: 0,
            alignSelf: "left",
            marginTop: "0.25vw"
        }
    }

    return (
        <div id="atuacao" style={styles.main}>
            <div style={styles.box}>

                <div style={styles.section}>

                    <h3 style={styles.subtitle}>ÁREAS DE ATUAÇÃO</h3>

                    <h1 style={styles.title}>Atuação consultiva e contenciosa</h1>

                    <h3 style={styles.description}>
                        Conte conosco para estar ao seu lado na solução de conflitos ou na prevenção, através de uma atuação íntegra, transparente e focada
                        no cliente.
                    </h3>

                    <Button variant="container" style={styles.button}>
                        <h3 style={styles.buttonText}>
                            Entre em contato
                        </h3>
                    </Button>

                </div>

                <div style={styles.colorSection}>

                    <div style={styles.textSection}>

                        {data.map((item) => {
                            return (
                                <div style={styles.textBox}>

                                    <div style={styles.boxIcon}>
                                        <div style={styles.icon}>

                                            <img style={styles.iconImage} src={item.icon} />

                                        </div>
                                    </div>

                                    <h3 style={styles.boxTitle}>{item.title}</h3>

                                    <h3 style={styles.boxDescription}>{item.description}</h3>

                                    <div>

                                        {item.hasButton ? (
                                            <Button variant="container" href={item.buttonSlug} style={styles.boxButton}>
                                                <h3 style={styles.buttonText}>
                                                    SAIBA MAIS
                                                </h3>
                                            </Button>
                                        ) : (null)}

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </div>
    )
}