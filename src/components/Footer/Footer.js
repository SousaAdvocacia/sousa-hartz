import { useMediaQuery } from "@mui/material";

export const Footer = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "100vw",
            height: isDesktop ? "70vh" : "140vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        },
    
        box: {
            width: isDesktop ? "70vw" : "90vw",
            height: isDesktop ? "35vh" : "130vh",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            alignItems: "flex-start",
            justifyContent: isDesktop ? "space-between" : "space-between",
        },
    
        content: {
            width: isDesktop ? "15vw" : "90vw",
            display: "flex",
            flexDirection: "column",
            alignItems: isDesktop ? "flex-start":"center",
            textAlign: isDesktop ? "left":"center",
            justifyContent: "space-between"
        },
    
        logo: {
            height: isDesktop ? "7.5vh" : "12vh",
            alignSelf: isDesktop ? "flex-start" : "center",
            margin: isDesktop ? "0 0 2vw 0" : "0 0 5vh 0"
        },
    
        title: {
            width: isDesktop ? "15vw" : "80vw",
            margin: isDesktop ? "0 0 2vw 0" : "0 0 3vh 0",
            textAlign: isDesktop ? "left" : "center"
        },
    
        description: {
            width: isDesktop ? "15vw" : "70vw",
            fontWeight: 300,
            margin: 0
        },

        descriptionText: {
            textDecoration: 'none',
            color: '#ffffff'
        },
    
        textIcon: {
            height: "1.5vh"
        },
    
        iconRow: {
            width: isDesktop ? "6vw" : "20svw",
            display: "flex",
            justifyContent: "space-between",
            alignSelf: isDesktop ? "flex-start" : "center",
            margin: "0 0 2vw 0"
        },
    
        icon: {
            height: "2vh"
        },
    
        map: {
            width: isDesktop ? "100%" : "70%"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.content}>

                    <img style={styles.logo} src="/logo.png" alt=""/>

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

                        <span><img style={styles.textIcon} src="/email.png" alt=""/> advocacia@sousahartz.com.br </span>
                        <br />
                        <span><img style={styles.textIcon} src="/phone.png" alt=""/> (21) 97250-0874 </span>
                        <br />
                        <span>CNPJ: 60.815.756/0001-10 </span>
                    </h3>

                </div>

                <div style={styles.content}>

                    <h3 style={styles.title}>
                        Mapa do site
                    </h3>

                    <h3 style={styles.description}>
                        <a style={styles.descriptionText}href="/">Home</a>
                        <br /><br />
                        <a style={styles.descriptionText}href="/#sobre">Sobre</a>
                        <br /><br />
                        <a style={styles.descriptionText}href="/#atuacao">Atuação</a>
                        <br /><br />
                        <a style={styles.descriptionText}href="/#institucional">Institucional</a>
                    </h3>

                </div>

                <div style={styles.content}>

                    <div style={styles.iconRow}>
                        <img style={styles.icon} src="/linkedin.png" alt=""/>
                        <img style={styles.icon} src="/instagram.png" alt=""/>
                        <img style={styles.icon} src="/email.png" alt=""/>
                    </div>

                </div>
            </div>

        </div>
    );
}