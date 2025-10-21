import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import data from "./data.json";

export const ActivityList = () => {
    const styles = {
        main: {
            backgroundImage: "url(/office-background.jpg)",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "#ffffff",
            width: "100vw",
            height: "150vh",
            display: "flex"
        },

        box: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box"
        },

        content: {
            width: "60%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        },

        title: {
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        description: {
            width: "80%",
            fontWeight: 300,
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        accordionArea: {
            width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
        },

        accordion: {
            width: "80%",
            height: "11%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            borderRadius: 1
        },

        accordionSummary: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        accordionIcon: {
            backgroundColor: "#000000",
            width: "2vw",
            height: "2vw",
            alignSelf: "center",
            margin: "0 1vw 0 1vw"
        },

        accordionTitle: {
            fontWeight: 300
        },

        accordionText: {
            backgroundColor: "#efefef"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.content}>

                    <h1 style={styles.title}>ATUAÇÃO</h1>

                    <h2 style={styles.description}>
                        Conte conosco para estar ao seu lado na solução de conflitos ou na prevenção, através de uma atuação íntegra, transparente e
                        focada no cliente.
                    </h2>

                    <div style={styles.accordionArea}>

                        {data.map((item) => {
                            return (
                                <Accordion disableGutters sx={styles.accordion}>

                                    <AccordionSummary style={styles.accordionSummary}>
                                        <div style={styles.accordionIcon} />
                                        <h2 style={styles.accordionTitle}>
                                            Titulo
                                        </h2>
                                    </AccordionSummary>

                                    <AccordionDetails style={styles.accordionText}>
                                        <h4>
                                            Texto
                                        </h4>
                                    </AccordionDetails>

                                </Accordion>
                            )
                        })}

                    </div>

                </div>

            </div>

        </div>
    )
}