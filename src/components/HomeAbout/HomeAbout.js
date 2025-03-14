import { useMediaQuery } from "@mui/system"

export const HomeAbout = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#bf996f",
            display: "flex",
            flexDirection: "row",
            color: "#ffffff"
        },

        box: {
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column-reverse",
            justifyContent: isDesktop ? "" : "start",
        },

        textBox: {
            width: isDesktop ? "45vw" : "90vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: isDesktop ? "0 auto 0 auto" : "5vw auto 5vw auto",
            padding: isDesktop ? "5vh 0 5vh 0" : "2vh 0 2vh 0"
        },

        title: {
            width: "100%",
            fontSize: isDesktop ? "40px" : "24px",
            fontWeight: 700,
            margin: 0
        },

        description: {
            fontSize: isDesktop ? "" : "18px",
            fontWeight: 100
        },

        image: {
            height: isDesktop ? "100%" : "50vh",
            width: isDesktop ? "35%" : "100%",
            objectFit: "cover"
        }
    }

    return (
        <div id="sobre" style={styles.main}>
            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>Quem é Jonathan Sousa</h1>

                    <h2 style={styles.description}>

                        Advogado, formado pela Universidade Estácio de Sá (UNESA) em 2019, Pós Graduado em Direito Militar pela Universidade Cândido Mendes 
                        (UCAM), Pós graduando em Direito do Consumidor, Membro da comissão de direito do consumidor da 30ª subseção da OAB/RJ– Santa Cruz, 
                        atuante na área do direito bancário desde o ano de 2015.
                        <br/>
                        Iniciei minha trajetória no direito em 2013 quando ingressei na universidade, posteriormente tive a oportunidade de estagiar e 
                        trabalhar como advogado em grandes escritórios renomados do Rio de Janeiro, atuando no direito bancário em favor de grandes 
                        instituições financeiras.
                        <br/>
                        Hoje minha missão é atuar em prol dos consumidores, defendendo seus interesses e buscando justiça, lutando para buscar transparência e 
                        juros corretos em seus contratos com as instituições financeiras.
                        <br/>
                        Eu optei em atuar em defesa dos consumidores ante as arbitrariedades e abusividades nas realações de consumo, onde  o consumidor 
                        sempre é prejudicado por ser a parte mais vulnerável na relação.
                        <br/>
                        Nosso compromisso é priorizar o consumidor e através de nossa atuação combativa e humanizada, assegurar a garantia dos direitos de 
                        nossos clientes.

                    </h2>

                </div>

                <img style={styles.image} src="profile-about.png" />

            </div>
        </div>
    )
}