import { Button, useMediaQuery } from "@mui/material";
import ReactPlayer from "react-player";
import { useState } from "react";

export const RecoveryInfo = () => {
    const [muted, setMuted] = useState(true);
    const handleToggleMute = () => setMuted(current => !current);

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#efefef",
            color: "#000000",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column"
        },

        box: {
            backgroundColor: "#efefef",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            alignItems: "center",
            justifyContent: "center"
        },

        boxContent: {
            width: isDesktop ? "50vw" : "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },

        title: {
            fontWeight: 800
        },

        description: {
            fontWeight: 300
        },

        textBox: {
            width: isDesktop ? "30vw" : "90vw",
            display: "flex",
            flexDirection: "column",
            alignItems: isDesktop ? "flex-start" : "center",
            margin: isDesktop ? 0 : "5vh 0 0 0",
            padding: "5vh 0 5vh 0"
        },

        image: {
            width: isDesktop ? "40vw" : "80vw",
            margin: isDesktop ? 0 : "6vh 0 0 0"
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isDesktop ? "17.5vw" : "70vw",
            height: "auto",
            marginBottom: isDesktop ? "2vw" : 0,
            borderRadius: 5,
            padding: 0
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },

        videoBox: {
            width: "100vw",
            height: "auto",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center"
        },

        video: {
            width: isDesktop ? "55vw" : "80vw",
            margin: "5vh 0 5vh 0"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>
                <div style={styles.boxContent}>

                        <img style={styles.image} src="/placeholder1.jpg" />
                </div>

                <div style={styles.boxContent}>
                    <div style={styles.textBox}>

                        <h2 style={styles.title}>• SOUZA HARTZ ADVOCACIA</h2>

                        <h3 style={styles.description}>
                            <strong>Quem é Jonathan Sousa</strong>
                            <br />
                            Advogado, formado pela Universidade Estácio de Sá (UNESA) em 2019, Pós Graduado em Direito Militar pela Universidade Cândido Mendes
                            (UCAM), Pós graduando em Direito do Consumidor, Membro da comissão de direito do consumidor da 30ª subseção da OAB/RJ– Santa Cruz,
                            atuante na área do direito bancário desde o ano de 2015.
                            <br />
                            <br />
                            Hoje minha missão é atuar em prol dos consumidores, defendendo seus interesses e buscando justiça, lutando para buscar transparência
                            e juros corretos em seus contratos com as instituições financeiras.
                        </h3>

                        <Button variant="container" style={styles.button}>
                            <h3 style={styles.buttonText}>
                                Entre em contato
                            </h3>
                        </Button>
                    </div>


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
    );
}