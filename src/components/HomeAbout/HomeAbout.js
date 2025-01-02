import { fontWeight, textAlign } from "@mui/system"

export const HomeAbout = () => {
    const styles = {
        main: {
            backgroundColor: "#bf996f",
            display: "flex",
            flexDirection: "row",
            color: "#ffffff"
        },
        
        box: {
            display: "flex",
            flexDirection: "row",
            width : "100vw",
            height: "70vh"
        },

        textBox: {
            width: "40vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 0 auto"
        },

        title: {
            width: "100%",
            fontSize: "40px",
            fontWeight: 700,
            margin: 0
        },

        description: {
            fontWeight: 100
        },

        image: {
            height: "100%",
            width: "35%",
            objectFit: "cover"
        }
    }

    return(
        <div style={styles.main}>
            <div style={styles.box}>
                
                <div style={styles.textBox}>

                    <h1 style={styles.title}>Mais de 20 anos de atuação na advocacia</h1>

                    <h2 style={styles.description}>

                    Com atuação também em outros Estados, como SC, PR, SP, MT, DF e CE, o escritório Marcos Rutzen Advocacia se renova para atender aos 
                    clientes com ainda mais qualidade, unindo a trajetória de empreendedorismo ao Direito.
                    <br/>
                    <br/>
                    Formado em Direito pela UFSM, em 2000, Marcos Rutzen é especialista nas áreas cível, bancária, tributária, empresarial e imobiliária. 
                    Natural de Três de Maio, o advogado é também empresário da área de vinhos, uma paixão que virou negócio. Músico amador e entusiasta 
                    musical, já empreendeu no setor, mas mantém hoje a música como hobby.
                    <br/>
                    <br/>
                    Atuando nas áreas consultiva e contenciosa, o objetivo do escritório é atender aos clientes com excelência, através de especialistas e 
                    associados que compõem a equipe.

                    </h2>

                </div>

                <img style = {styles.image} src="profile-about.png"/>

            </div>
        </div>
    )
}