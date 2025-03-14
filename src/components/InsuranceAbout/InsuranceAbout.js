import { textAlign, useMediaQuery } from "@mui/system"

export const InsuranceAbout = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

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
            width: isDesktop ? "65%" : "100%",
            height: "auto",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            margin: isDesktop ? "5vh 0 5vh 0" : "5vh 0 8vh 0"
        },

        textBox: {
            width: isDesktop ? "65%" : "80%",
            textAlign: isDesktop ? "left" : "center"
        },

        title: {
            margin: "-0.5vw 0 -0.5vw 0"
        },

        subtitle: {
            fontWeight: 100,
            textAlign: isDesktop ? "justify" : "center"
        },

        description: {
            fontWeight: 100,
            textAlign: "justify"
        },

        image: {
            backgroundColor: "#000000",
            width: isDesktop ? "20vw" : "60vw",
            height: isDesktop ? "55vh" : "40vh",
            objectFit: "cover",
            marginBottom: isDesktop ? 0 : "2vh"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h3 style={styles.subtitle}>Quem é o Jonathan Sousa</h3>
                    <h1 style={styles.title}>Jonathan Sousa</h1>
                    <h2 style={styles.subtitle}>OAB/RJ RJ123456</h2>
                    <h3 style={styles.description}>
                        Advogado, formado pela Universidade Estácio de Sá (UNESA) em 2019, Pós Graduado em Direito Militar pela Universidade Cândido Mendes
                        (UCAM), Pós graduando em Direito do Consumidor, Membro da comissão de direito do consumidor da 30ª subseção da OAB/RJ– Santa Cruz,
                        atuante na área do direito bancário desde o ano de 2015.
                        <br />
                        Iniciei minha trajetória no direito em 2013 quando ingressei na universidade, posteriormente tive a oportunidade de estagiar e
                        trabalhar como advogado em grandes escritórios renomados do Rio de Janeiro, atuando no direito bancário em favor de grandes
                        instituições financeiras.
                        <br />
                        Hoje minha missão é atuar em prol dos consumidores, defendendo seus interesses e buscando justiça, lutando para buscar transparência e
                        juros corretos em seus contratos com as instituições financeiras.
                        <br />
                        Eu optei em atuar em defesa dos consumidores ante as arbitrariedades e abusividades nas realações de consumo, onde  o consumidor
                        sempre é prejudicado por ser a parte mais vulnerável na relação.
                        <br />
                        Nosso compromisso é priorizar o consumidor e através de nossa atuação combativa e humanizada, assegurar a garantia dos direitos de
                        nossos clientes.
                    </h3>

                </div>

                <img style={styles.image} src="/profile-about.png" />

            </div>

        </div>
    )
}