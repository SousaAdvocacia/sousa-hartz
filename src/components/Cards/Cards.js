import { Button, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const Cards = () => {

    const styles = {
        main: {
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
    
        box: {
            width: "60vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "5vh 0 5vh 0"
        },
    
        title: {
            width: "60vw",
            fontWeight: 800
        },
    
        description: {
            fontWeight: 300
        },
    
        topRow: {
            width: "60vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "1.5vw",
            boxSizing: "border-box",
            padding: "auto"
        },
    
        bottomRow: {
            width: "44.7vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "1.5vw",
            boxSizing: "border-box",
            padding: "auto"
        },
    
        card: {
            backgroundColor: "rgb(191, 153, 111, 0.5)",
            width: "14vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxSizing: "border-box",
            padding: "1vw 0.5vw 0 0.5vw",
            borderRadius: 5
        },
    
        cardIcon: {
            maxWidth: "5vw",
            width: "auto"
        },
    
        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "35vw",
            height: "auto",
            marginBottom: "2vw",
            padding: 0,
            borderRadius: 5
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },
    }

    return (
        <div style={styles.main}>
            <div style={styles.box}>

                <h2 style={styles.title}>• DIFERENCIAIS</h2>

                <h3 style={styles.description}>
                    Nosso escritório se destaca por apresentar soluções completas para dívidas concursais (Recuperação Judicial) e extraconcursais
                    (que não entram na Recuperação Judicial), seja para empresas de pequeno, médio ou grande porte.
                </h3>

                <div style={styles.topRow}>
                    {data.first.map((item) => {

                        return (
                            <div style={styles.card}>
                                <img style={styles.cardIcon} src={item.icon} />
                                <h4 style={styles.cardDescription}>
                                    {item.text}
                                </h4>
                            </div>
                        )

                    })}
                </div>
                <div style={styles.bottomRow}>

                    {data.second.map((item) => {

                        return (
                            <div style={styles.card}>
                                <img style={styles.cardIcon} src={item.icon} />
                                <h4 style={styles.cardDescription}>
                                    {item.text}
                                </h4>
                            </div>
                        )

                    })}

                </div>

                <Button variant="container" style={styles.button}>
                    <h3 style={styles.buttonText}>
                        Entre em contato
                    </h3>
                </Button>


            </div>
        </div>
    );
}