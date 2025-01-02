import { Button } from "@mui/material";
import data from "./data.json";

export const Steps = () => {
    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <h2 style={styles.title}>• DIFERENCIAIS</h2>

                <h3 style={styles.description}>
                    Nosso escritório se destaca por apresentar soluções completas para dívidas concursais (Recuperação Judicial) e extraconcursais
                    (que não entram na Recuperação Judicial), seja para empresas de pequeno, médio ou grande porte.
                </h3>

                <div style={styles.stepsRow}>

                    {data.map((item) => {
                        return (
                            <div style={styles.step}>

                                <h1>{item.number}</h1>

                                <div style={styles.line} />

                                <h3 style={styles.stepTitle}>
                                    {item.title}
                                </h3>

                                <h3 style={styles.stepDescription}>
                                    {item.description}
                                </h3>

                            </div>
                        );
                    })}

                </div>

                <Button variant="container" style={styles.button}>
                    <h3>
                        QUERO DISCUTIR SOBRE MINHA EMPRESA
                    </h3>
                </Button>

            </div>

        </div>
    );
}

const styles = {
    main: {
        backgroundColor: "#ffffff",
        color: "#000000",
        width: "100vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    box: {
        width: "60vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        width: "60vw",
        fontWeight: 800
    },

    description: {
        fontWeight: 300
    },

    stepsRow: {
        backgroundColor: "#efefef",
        width: "60vw",
        height: "50vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    step: {
        width: "12vw",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        margin: "0 auto auto auto",
        boxSizing: "border-box",
        padding: "2.5vh"
    },

    stepTitle: {
        width: "12vw"
    },

    line: {
        backgroundColor: "#000000",
        width: "10vw",
        height: "0.1vh"
    },

    stepDescription: {
        width: "12vw",
        fontWeight: 300
    },

    button: {
        backgroundColor: "#bf996f",
        color: "#ffffff",
        width: "35vw",
        height: "5vh",
        marginTop: "1.5vw",
        borderRadius: 5
    }
}