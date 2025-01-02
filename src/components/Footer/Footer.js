export const Footer = () => {
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

                        <span><img style={styles.textIcon} src="/email.png" /> placeholder@email.com </span>
                        <br />
                        <span><img style={styles.textIcon} src="/phone.png" /> (01) 2345-6789 </span>
                        <br />
                        <span><img style={styles.textIcon} src="/whatsapp.png" /> (01) 2345-6789 </span>
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
                        Blog<br /><br />
                        Contato
                    </h3>

                </div>

                <div style={styles.content}>

                    <div style={styles.iconRow}>
                        <img style={styles.icon} src="/linkedin.png" />
                        <img style={styles.icon} src="/instagram.png" />
                        <img style={styles.icon} src="/email.png" />
                    </div>

                    <img style={styles.map} src="/map-placeholder.png"/>

                </div>
            </div>

        </div>
    );
}

const styles = {
    main: {
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "100vw",
        height: "70vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    box: {
        width: "70vw",
        height: "35vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },

    content: {
        width: "15vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    logo: {
        height: "7.5vh",
        alignSelf: "flex-start",
        margin: "0 0 2vw 0"
    },

    title: {
        width: "15vw",
        margin: "0 0 2vw 0"
    },

    description: {
        width: "15vw",
        fontWeight: 300,
        margin: 0
    },

    textIcon: {
        height: "1.5vh"
    },

    iconRow: {
        width: "6vw",
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "flex-start",
        margin: "0 0 2vw 0"
    },

    icon: {
        height: "2vh"
    },

    map: {
        width: "100%"
    }
}