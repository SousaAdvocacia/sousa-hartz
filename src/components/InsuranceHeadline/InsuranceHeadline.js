import { Button } from "@mui/material";
import { boxSizing, textAlign, useMediaQuery } from "@mui/system"
import { useState } from "react";
import ReactPlayer from "react-player";

export const InsuranceHeadline = () => {

    const [muted, setMuted] = useState(true);
    const handleToggleMute = () => setMuted(current => !current);

    const isMobile = useMediaQuery('(min-width:1000px)');

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
            flexDirection: isMobile ? "row" : "column-reverse",
            width: "100vw",
            height: "100vh"
        },

        textBox: {
            width: isMobile ? "30vw" : "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "start" : "center",
            justifyContent: "center",
            textAlign: isMobile ? "left" : "center",
            margin: isMobile ? "0 auto 0 auto" : "3vh auto 0 auto"
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
            width: isMobile ? "17.5vw" : "50vw",
            height: "auto",
            marginTop: "1vw",
            padding: 0,
            borderRadius: 5
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },

        imageBox: {
            backgroundColor: "#bf996f",
            height: "100%",
            width: isMobile ? "40%" : "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "center"

        },

        image: {
            height: "90%",
            width: "70%",
            objectFit: "cover"
        },

        videoBox: {
            width: "100vw",
            height: isMobile ? "70vh" : "40vh",
            display: "flex",
            alignItems: isMobile ? "flex-start" : "center",
            alignItems: "center",
            justifyContent: "center"
        },

        video: {
            width: isMobile ? "55vw" : "90vw"
        }
    }

    return (
        <div style={styles.main}>
            <div style={styles.navArea} />
            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>Mais de 20 anos de atuação na advocacia</h1>

                    <h2 style={styles.description}>

                    Advogado, formado pela Universidade Estácio de Sá (UNESA) em 2019, Pós Graduado em Direito Militar pela Universidade Cândido Mendes 
                    (UCAM), Pós graduando em Direito do Consumidor, Membro da comissão de direito do consumidor da 30ª subseção da OAB/RJ– Santa Cruz, 
                    atuante na área do direito bancário desde o ano de 2015.

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

            <div style={styles.videoBox}>
                <div style={styles.video}>
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={muted}
                        url="/intro-video.mp4"
                        position="absolute"
                        onClick={() => { (handleToggleMute()) }}
                    />
                </div>
            </div>
        </div>
    )
}