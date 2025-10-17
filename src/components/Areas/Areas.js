import { Button, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const Areas = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: isDesktop ? "#efefef" : "#ffffff",
            width: "100vw",
            height: isDesktop ? "auto" : "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isDesktop ? "8vh 0 8vh 0" : "4vh 0 0 0"
        },

        box: {
            backgroundColor: "#ffffff",
            width: isDesktop ? "70vw" : "100vw",
            height: isDesktop ? "auto" : "auto",
            borderRadius: isDesktop ? 15 : 0,
            display: "flex",
            flexDirection: isDesktop ? "row" : "column"
        },

        section: {
            width: isDesktop ? "35%" : "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: isDesktop ? 0 : "5vh"
        },

        subtitle: {
            width: isDesktop ? "13vw" : "80vw",
            fontWeight: 500
        },

        title: {
            width: isDesktop ? "13vw" : "80vw",
            margin: 0
        },

        description: {
            width: isDesktop ? "13vw" : "80vw",
            fontWeight: 300
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isDesktop ? "13vw" : "80vw",
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
            width: isDesktop ? "65%" : "100%",
            height: isDesktop ? "auto" : "auto",
            borderTopRightRadius: isDesktop ? 15 : 0,
            borderBottomRightRadius: isDesktop ? 15 : 0,
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
            flexDirection: isDesktop ? "row" : "column",
            flexWrap: "wrap",
            justifyContent: "center"
        },

        textBox: {
            width: isDesktop ? "50%" : "100%",
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
            width: isDesktop ? "2vw" : "6vw",
            height: isDesktop ? "2vw" : "6vw",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.25vw"
        },

        iconImage: {
            width: isDesktop ? "1.5vw" : "5vw"
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
            width: isDesktop ? "10vw" : "40vw",
            height: isDesktop ? "4.5vh" : "4vh",
            fontSize: isDesktop ? "" : "12px",
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

                    <Button variant="container" style={styles.button} target="_blank" href="https://wa.me/5521983654839?text=Gostaria%20de%20um%20suporte%20com%20o%20jur%C3%ADdico%20da%20Sousa%20Advocacia!">
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