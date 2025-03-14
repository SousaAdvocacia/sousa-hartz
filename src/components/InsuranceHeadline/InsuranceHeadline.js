import { Button } from "@mui/material";
import { boxSizing, textAlign, useMediaQuery } from "@mui/system"
import { useState } from "react";
import ReactPlayer from "react-player";

export const InsuranceHeadline = () => {

    const [muted, setMuted] = useState(true);
    const handleToggleMute = () => setMuted(current => !current);

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#ffffff",
            color: "#000000",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        },

        navArea: {
            backgroundColor: "#bf996f",
            width: "100vw",
            height: "10vh"
        },

        box: {
            display: "flex",
            flexDirection: isDesktop ? "row" : "column-reverse",
            width: "100vw",
            height: "100vh"
        },

        textBox: {
            width: isDesktop ? "30vw" : "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: isDesktop ? "start" : "center",
            justifyContent: "center",
            textAlign: isDesktop ? "left" : "center",
            margin: isDesktop ? "0 auto 0 auto" : "3vh auto 0 auto"
        },

        title: {
            width: "100%",
            fontWeight: 800,
            margin: 0
        },

        description: {
            fontWeight: 100
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isDesktop ? "17.5vw" : "50vw",
            height: "auto",
            margin: isDesktop ? "1vw 0 0 0" : "1vw 0 8vw 0",
            padding: 0,
            borderRadius: 5
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },

        imageBox: {
            backgroundColor: "#bf996f",
            height: "100%",
            width: isDesktop ? "40%" : "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "center"

        },

        image: {
            height: "90%",
            width: "70%",
            objectFit: "cover"
        }
    }

    return (
        <div style={styles.main}>
            <div style={styles.navArea} />
            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>ENTENDA SOBRE RECUPERAÇÃO JUDICIAL</h1>

                    <h2 style={styles.description}>

                    A recuperação judicial configura-se como um procedimento legal previsto na Lei nº 11.101/2005, que visa à superação da situação de crise 
                    econômico-financeira do devedor, possibilitando a preservação da empresa, sua função social e o estímulo à atividade econômica.

                    </h2>

                    <Button variant="container" style={styles.button}>
                        <h3 style={styles.buttonText}>
                            Entre em contato
                        </h3>
                    </Button>

                </div>

                <div style={styles.imageBox}>
                    <img style={styles.image} src="profile-about.png" />
                </div>

            </div>
        </div>
    )
}