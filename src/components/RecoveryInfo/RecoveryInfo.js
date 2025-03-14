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

                        <h2 style={styles.title}>• LACERDA NETO ADVOCACIA</h2>

                        <h3 style={styles.description}>
                            <strong>QUEM É DR. NILTON LACERDA</strong>
                            <br />
                            O escritório de advocacia liderado pelo Dr. Nilton de Lacerda Neto, com o respaldo e a vasta experiência de seu pai, Dr. Nilton de Lacerda Filho,
                            advogado com mais de 36 anos de atuação e reconhecida reputação na comunidade jurídica.
                            <br />
                            <br />
                            Fundado pelo Dr. Nilton de Lacerda Filho, o escritório consolidou-se ao longo das décadas como referência em serviços jurídicos de alta
                            qualidade. Com a chegada da segunda geração, o Dr. Nilton de Lacerda Neto agrega uma visão inovadora e estratégica, unindo seu conhecimento e
                            habilidades à expertise do pai para oferecer soluções jurídicas eficientes e personalizadas.
                            <br />
                            <br />
                            Com uma equipe altamente qualificada, o escritório atua em diversas áreas do direito, garantindo que cada caso seja conduzido com
                            comprometimento, ética e excelência, sempre em busca dos melhores resultados para seus clientes.
                        </h3>

                        <Button variant="container" style={styles.button}>
                            <h3 style={styles.buttonText}>
                                Entre em contato
                            </h3>
                        </Button>
                    </div>


                </div>
            </div>
        </div>
    );
}