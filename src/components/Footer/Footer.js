import { useMediaQuery } from "@mui/material";

export const Footer = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "100vw",
            height: isMobile ? "70vh" : "140vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },
    
        box: {
            width: isMobile ? "70vw" : "90vw",
            height: isMobile ? "35vh" : "130vh",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "flex-start",
            justifyContent: isMobile ? "space-between" : "space-between",
        },
    
        content: {
            width: isMobile ? "15vw" : "90vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
        },
    
        logo: {
            height: isMobile ? "7.5vh" : "12vh",
            alignSelf: isMobile ? "flex-start" : "center",
            margin: isMobile ? "0 0 2vw 0" : "0 0 5vh 0"
        },
    
        title: {
            width: isMobile ? "15vw" : "80vw",
            margin: isMobile ? "0 0 2vw 0" : "0 0 3vh 0",
            textAlign: isMobile ? "left" : "center"
        },
    
        description: {
            width: isMobile ? "15vw" : "70vw",
            fontWeight: 300,
            margin: 0
        },
    
        textIcon: {
            height: "1.5vh"
        },
    
        iconRow: {
            width: isMobile ? "6vw" : "20svw",
            display: "flex",
            justifyContent: "space-between",
            alignSelf: isMobile ? "flex-start" : "center",
            margin: "0 0 2vw 0"
        },
    
        icon: {
            height: "2vh"
        },
    
        map: {
            width: isMobile ? "100%" : "70%"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.content}>

                    <img style={styles.logo} src="/logo.png" />

                    <h3 style={styles.description}>
                        Atuação consultiva e contenciosa em Direito Empresarial, Tributário, Bancário, Cível e áreas afins. Especialidade em Recuperação
                        Judicial, planejamento sucessório e patrimonial.
                    </h3>

                </div>

                <div style={styles.content}>

                    <h3 style={styles.title}>
                        Contato
                    </h3>

                    <h3 style={styles.description}>

                        <span><img style={styles.textIcon} src="/email.png" /> sousahartz@gmail.com </span>
                        <br />
                        <span><img style={styles.textIcon} src="/phone.png" /> (21) 99900-3367 </span>
                        <br />
                        <span>CNPJ: 58.531.639/0001-83 </span>
                    </h3>

                </div>

                <div style={styles.content}>

                    <h3 style={styles.title}>
                        Mapa do site
                    </h3>

                    <h3 style={styles.description}>
                        Home<br /><br />
                        Sobre<br /><br />
                        Atuação<br /><br />
                        Institucional<br /><br />
                    </h3>

                </div>

                <div style={styles.content}>

                    <div style={styles.iconRow}>
                        <img style={styles.icon} src="/linkedin.png" />
                        <img style={styles.icon} src="/instagram.png" />
                        <img style={styles.icon} src="/email.png" />
                    </div>

                </div>
            </div>

        </div>
    );
}