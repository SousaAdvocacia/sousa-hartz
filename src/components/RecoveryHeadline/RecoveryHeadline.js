import { AppBar, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";

export const RecoveryHeadline = () => {
    const pages = ['Home', 'Sobre', 'Atuação', 'Institucional', "Blog", "Contato"];

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {

        main: {
            backgroundImage: "url(" + "/office-background.jpg" + ")",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "#ffffff",
            width: "100vw",
            height: isMobile ? "75vh" : "120vh",
            display: "flex",
            flexDirection: isMobile ? "row" : "column-reverse"
        },
    
        box: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: isMobile ? "50vw" : "100vw",
            height: "75vh",
            display: "flex",
            flexDirection: isMobile ? "row" : "column-reverse",
            alignItems: isMobile ? "flex-end" : "center",
            justifyContent: "center",
            boxSizing: "border-box"
        },
    
        textBox: {
            width: isMobile  ? "25vw" : "80vw",
            display: "flex",
            flexDirection: "column",
            margin: isMobile ? "0 0 4vw 5vw" : 0,
            textAlign: isMobile ? "left" : "center"
        },
    
        title: {
            fontWeight: 800,
            filter: "drop-shadow(3px 3px 3px #000000)"
        },
    
        description: {
            fontWeight: 100,
            filter: "drop-shadow(3px 3px 3px #000000)"
        },
    
        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isMobile ? "17.5vw" : "50vw",
            height: "auto",
            marginBottom: "2vw",
            padding: 0,
            borderRadius: 5,
            alignSelf: isMobile ? "start" : "center",
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },
    
        profile: {
            height: isMobile ? "55vh" : "40vh",
            marginTop: "auto",
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>
                        Recuperação Judicial:
                        Uma Resolução Estratégica para Empresas em Dificuldades
                    </h1>

                    <h3 style={styles.description}>
                        Sua empresa está enfrentando um cenário desafiador, caracterizado por acúmulo de dívidas, fluxo de caixa comprometido, demandas
                        judiciais de cobrança, bloqueios de contas bancárias e risco de busca e apreensão?
                        <br />
                        <br />
                        Nós somos especialistas neste tema e iremos ajudar você.
                    </h3>

                    <Button variant="container" style={styles.button}>
                        <h3 style={styles.buttonText}>
                            Entre em contato
                        </h3>
                    </Button>

                </div>

            </div>

            <div style={styles.box}>

                <img style={styles.profile} src="/profile.png" />

            </div>

        </div>
    )
}