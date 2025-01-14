import { textAlign, useMediaQuery } from "@mui/system"

export const InsuranceAbout = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "100vw",
            height: "auto", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        box: {
            width: isMobile ? "65%" : "100%",
            height: "auto",
            display: "flex",
            flexDirection: isMobile ? "row" : "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            margin: isMobile ? "5vh 0 5vh 0" : "5vh 0 8vh 0"
        },

        textBox: {
            width: isMobile ? "65%" : "80%",
            textAlign: isMobile ? "left" : "center"
        },

        title: {
            margin: "-0.5vw 0 -0.5vw 0"
        },

        subtitle: {
            fontWeight: 100,
            textAlign: isMobile ? "justify" : "center"
        },

        description: {
            fontWeight: 100,
            textAlign: "justify"
        },

        image: {
            backgroundColor: "#000000",
            width: isMobile ? "20vw" : "60vw",
            height: isMobile ? "55vh" : "40vh",
            objectFit: "cover",
            marginBottom: isMobile ? 0 : "2vh"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h3 style={styles.subtitle}>Quem é o Jonathan Sousa Hartz</h3>
                    <h1 style={styles.title}>Jonathan Sousa Hartz</h1>
                    <h2 style={styles.subtitle}>OAB/RJ RJ123456</h2>
                    <h3 style={styles.description}>
                        Formado em Direito pela UFSM, em 2000, Marcos Rutzen é especialista nas áreas cível, bancária, tributária, empresarial e imobiliária.
                        Natural de Três de Maio, o advogado é também empresário da área de vinhos, uma paixão que virou negócio. Músico amador e entusiasta
                        musical, já empreendeu no setor, mas mantém hoje a música como hobby.
                        <br />
                        <br />
                        Atuando nas áreas consultiva e contenciosa, o objetivo do escritório é atender aos clientes com excelência, através de especialistas e
                        associados que compõem a equipe.
                    </h3>

                </div>

                <img style={styles.image} src="/profile-about.png"/>

            </div>

        </div>
    )
}