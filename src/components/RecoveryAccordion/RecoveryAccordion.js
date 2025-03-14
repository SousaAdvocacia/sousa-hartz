import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from "@mui/material";
import data from "./data.json";

export const RecoveryAccordion = () => {
    
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
            backgroundColor: "#ffffff",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        },

        boxContent: {
            width: isDesktop ? "50vw" : "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },

        textBox: {
            width: isDesktop ? "30vw" : "90vw",
            display: "flex",
            flexDirection: "column",
            alignItems: isDesktop ? "flex-start" : "center",
            margin: isDesktop ? 0 : "5vh 0 0 0"
        },

        title: {
            fontWeight: 800
        },

        description: {
            fontWeight: 300
        },

        accordionBox: {
            backgroundColor: "#bf996f",
            width: isDesktop ? "50vw" : "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: isDesktop ? "5vh 0 5vh 0" : "2vw"
        },

        accordion: {
            width: isDesktop ? "45vw" : "96.25vw"
        },

        accordionOpen: {
            backgroundColor: "#efefef"
        },

        accordionText: {
            fontWeight: 400
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

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

                        {data.map((item) => {
                            return (
                                <Accordion disableGutters sx={styles.accordion}>

                                    <AccordionSummary>
                                        <h3>
                                            {item.title}
                                        </h3>
                                    </AccordionSummary>

                                    <AccordionDetails style={styles.accordionOpen}>
                                        {item.text.map((content) => {
                                            return (
                                                <h4 style={styles.accordionText}>{content} <br /></h4>
                                            );
                                        })}
                                    </AccordionDetails>

                                </Accordion>
                            )
                        })}

                    </div>

                </div>
            </div>

        </div>
    );
}