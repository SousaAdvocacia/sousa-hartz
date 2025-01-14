import { textAlign, useMediaQuery } from "@mui/system"

export const InsuranceAbout = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "100vw",
            height: isMobile ? "60vh" : "110vh", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        box: {
            width: isMobile ? "50%" : "100%",
            height: isMobile ? "100%" : "90%",
            display: "flex",
            flexDirection: isMobile ? "row" : "column-reverse",
            alignItems: "center",
            justifyContent: "space-between"
        },

        textBox: {
            width: isMobile ? "60%" : "80%",
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
            width: isMobile ? "15vw" : "60vw",
            height: isMobile ? "45vh" : "55vh",
            objectFit: "cover"
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