import { useMediaQuery } from "@mui/material";

export const HomeInfo = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#000000",
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
            <h1 style={styles.title}>Sousa Advocacia</h1>

            <h2 style={styles.description}>
                Atuação consultiva e contenciosa em Direito Empresarial, Tributário, Bancário, Cível e áreas afins. Especialidade em Recuperação Judicial,
                planejamento sucessório e patrimonial.
            </h2>
        </div>
    )
}