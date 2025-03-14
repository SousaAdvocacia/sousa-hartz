import { Button, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const Steps = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
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
            fontWeight: 800,
            marginTop: 0
        },
    
        description: {
            fontWeight: 300,
            alignSelf: "start"
        },
    
        stepsRow: {
            backgroundColor: "#efefef",
            width: isDesktop ? "60vw" : "80vw",
            height: "auto",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            justifyContent: "space-between",
            marginBottom: "3vh",
            paddingTop: isDesktop ? 0 : "5vh"
        },
    
        step: {
            width: "12vw",
            height: isDesktop ? "auto" : "30vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            textAlign: "center",
            margin: "0 auto auto auto",
            boxSizing: "border-box",
            padding: isDesktop ? "2.5vh" : 0
        },

        stepNumber: {
            margin: isDesktop ? "" : "1vh"
        },
    
        stepTitle: {
            width: isDesktop ? "12vw" : "60vw",
            margin : isDesktop ? "" : "1vh"
        },
    
        line: {
            backgroundColor: "#000000",
            width: isDesktop ? "10vw" : "60vw",
            height: "0.1vh"
        },
    
        stepDescription: {
            width: isDesktop ? "12vw" : "75vw",
            fontWeight: 300
        },
    
        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isDesktop ? "35vw" : "80vw",
            height: "auto",
            marginTop: "auto",
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

                <h2 style={styles.title}>• PROCESSO E METODOLOGIA</h2>

                <h3 style={styles.description}>
                    É possível prevenir a falência com organização e planejamento.
                    <br/>
                    Confira quatro ações importantes para não fechar as portas da empresa.
                </h3>

                <div style={styles.stepsRow}>

                    {data.map((item) => {
                        return (
                            <div style={styles.step}>

                                <h1 style={styles.stepNumber}>{item.number}</h1>

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
                    <h3 style={styles.buttonText}>
                        QUERO DISCUTIR SOBRE MINHA EMPRESA
                    </h3>
                </Button>

            </div>

        </div>
    );
}