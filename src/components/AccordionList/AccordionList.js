import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from "@mui/material";

export const AccordionList = (json) => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {

        accordion: {
            width: isMobile ? "45vw" : "100vw"
        },
    
        accordionText: {
            backgroundColor: "#efefef"
        }
    }

    return (

        json.map((item) => {
            return (
                <Accordion disableGutters sx={styles.accordion}>

                    <AccordionSummary>
                        <h4>
                            {item.title}
                        </h4>
                    </AccordionSummary>

                    <AccordionDetails style={styles.accordionText}>
                        {item.text.map((content) => {
                            return (
                                <h4>{content} <br/></h4>
                            );
                        })}
                    </AccordionDetails>

                </Accordion>
            )
        })

    );
}