import { useMediaQuery } from "@mui/material";

export const InsuranceInfo = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "100vw",
            height: "40vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },

        title: {
            width: isDesktop ? "60vw" : "90vw",
            fontSize: isDesktop ? "" : "22px",
            textAlign: "center"
        },

        description: {
            width: isDesktop ? "60vw" : "90vw",
            textAlign: "center",
            fontSize: isDesktop ? "" : "18px",
            fontWeight: 100
        }
    }

    return (
        <div style={styles.main}>
            <h1 style={styles.title}>O que diz o direito brasileiro sobre seguros?</h1>

            <h2 style={styles.description}>
            No Brasil, os contratos de seguro são regulamentados pelo Código Civil (Lei nº 10.406/2002) e pela Superintendência de Seguros Privados (SUSEP). 
            Esses contratos são destinados a oferecer proteção financeira contra danos e perdas específicas, como as causadas por enchentes, se estiver 
            disposta em contrato.
            </h2>
        </div>
    )
}