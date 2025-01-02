import { AccordionList } from "../AccordionList/AccordionList";
import data from "./data.json";
import { Button, useMediaQuery } from "@mui/material";
import ReactPlayer from "react-player";
import { useState } from "react";

export const Information = () => {
    const [muted, setMuted] = useState(true);
    const handleToggleMute = () => setMuted(current => !current);

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#efefef",
            color: "#000000",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column"
        },
    
        topBox: {
            backgroundColor: "#ffffff",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        },
    
        boxContent: {
            width: isMobile ? "50vw" : "100vw",
            height: isMobile ? "45vh" : "40vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },
    
        textBox: {
            width: isMobile ? "30vw" : "90vw",
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "flex-start" : "center"
        },
    
        title: {
            fontWeight: 800
        },
    
        description: {
            fontWeight: 300
        },
    
        accordionBox: {
            backgroundColor: "#bf996f",
            width: isMobile ? "50vw" : "100vw",
            height: isMobile ? "45vh" : "36vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
    
        accordionText: {
            backgroundColor: "#efefef"
        },
    
        bottomBox: {
            backgroundColor: "#efefef",
            width: "100vw",
            height: isMobile ? "60vh": "auto",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
        },
    
        imageBox: {
            width: "50vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
    
        image: {
            width: isMobile ? "40vw" : "80vw"
        },
    
        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isMobile ? "17.5vw" : "70vw",
            height: "4.5vh",
            marginBottom: isMobile ? "2vw" : 0,
            borderRadius: 5,
            padding: 0
        },
    
        videoBox: {
            width: "100vw",
            height: isMobile ? "65vh" : "40vh",
            display: "flex",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "center"
        },
    
        video: {
            width: isMobile ? "55vw" : "80vw"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.topBox}>

                <div style={styles.boxContent}>

                    <div style={styles.textBox}>

                        <h2 style={styles.title}>• ENTENDA SOBRE RECUPERAÇÃO JUDICIAL</h2>

                        <h3 style={styles.description}>
                            A recuperação judicial configura-se como um procedimento legal previsto na Lei nº 11.101/2005, que visa à superação da situação de
                            crise econômico-financeira do devedor, possibilitando a preservação da empresa, sua função social e o estímulo à atividade econômica.
                        </h3>
                    </div>

                </div>

                <div style={styles.boxContent}>

                    <div style={styles.accordionBox}>

                        {AccordionList(data)}

                    </div>

                </div>
            </div>

            <div style={styles.bottomBox}>
                <div style={styles.boxContent}>
                    <div style={styles.imageBox}>

                        <img style={styles.image} src="/placeholder1.jpg" />

                    </div>
                </div>

                <div style={styles.boxContent}>
                    <div style={styles.textBox}>

                        <h2 style={styles.title}>• SOUZA HARTZ ADVOCACIA</h2>

                        <h3 style={styles.description}>
                            <strong>Quem é Jonathan Hartz de Sousa</strong>
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
                            <h3>
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