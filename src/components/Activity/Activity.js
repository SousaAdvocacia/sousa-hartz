import { Button, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const Activity = () => {
    const styles = {
        main: {
            backgroundColor: "#efefef",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        box: {
            backgroundColor: "#ffffff",
            width: "70vw",
            height: "95vh",
            borderRadius: 15,
            display: "flex"
        },

        section: {
            width: "35%",
            height: "95vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },

        subtitle: {
            width: "13vw",
            fontWeight: 500
        },

        title: {
            width: "13vw",
            margin: 0
        },

        description: {
            width: "13vw",
            fontWeight: 300
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "13vw",
            height: "4.5vh",
            marginTop: "3vw",
            borderRadius: 5
        },

        colorSection: {
            backgroundColor: "#bf996f",
            width: "65%",
            height: "95vh",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        textSection: {
            color: "#ffffff",
            width: "85%",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
        },

        textBox: {
            width: "50%",
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
            width: "2vw",
            height: "2vw",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.25vw"
        },

        iconImage: {
            width: "1.5vw"
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
            width: "10vw",
            height: "4.5vh",
            borderRadius: 5,
            alignSelf: "left",
            marginTop: "0.25vw"
        }
    }

    return (
        <div style={styles.main}>
            <div style={styles.box}>

                <div style={styles.section}>

                    <h3 style={styles.subtitle}>ÁREAS DE ATUAÇÃO</h3>

                    <h1 style={styles.title}>Atuação consultiva e contenciosa</h1>

                    <h3 style={styles.description}>
                        Conte conosco para estar ao seu lado na solução de conflitos ou na prevenção, através de uma atuação íntegra, transparente e focada
                        no cliente.
                    </h3>

                    <Button variant="container" style={styles.button}>
                        <h3>
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
                                                <h3>
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