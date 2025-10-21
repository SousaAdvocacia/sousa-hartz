import { Button } from "@mui/material"

export const RuralAbout = () => {

    const styles = {
        main: {
            backgroundImage: "url(/office-background.jpg)",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "#ffffff",
            width: "100vw",
            height: "auto",
            display: "flex"
        },

        box: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
        },

        content: {
            width: "60%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        },

        title: {
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        description: {
            width: "80%",
            fontWeight: 300,
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        textArea: {
            backgroundColor: "#ffffff",
            width: "50vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            textAlign: "left",
            padding: "5vh 5vw 5vh 5vw",
            marginBottom: "10vh"
        },

        text: {
            color: "#000000",
            fontWeight: 300,
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "20vw",
            height: "auto",
            borderRadius: 5,
            marginTop: "3vh",
            padding: 0
        },

        buttonText: {
            margin: "0.5vw"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={{ height: "10vh" }}></div>

                <div style={styles.content}>

                    <h1 style={styles.title}>DIREITO RURAL</h1>

                    <h2 style={styles.description}>
                            Proteja seu patrimônio e garanta segurança nas relações comerciais do campo.
                    </h2>

                    <div style={styles.textArea}>
                        <h2 style={styles.text}>
                            O Plano Empresarial Rural Sousa Advocacia foi criado para produtores e cooperativas que desejam atuar com segurança jurídica, evitando prejuízos e processos que podem comprometer o negócio.
                            Nossa equipe especializada cuida de contratos agrícolas, financiamentos, cobranças, execuções, renegociações bancárias, regularização de terras e defesa patrimonial — tudo com acompanhamento jurídico contínuo e suporte estratégico.
                            <br/><br/>
                            Benefícios principais:
                            <br/><br/>
                            Consultoria jurídica permanente voltada ao agronegócio;
                            <br/><br/>
                            Revisão e renegociação de dívidas bancárias e contratos rurais;
                            <br/><br/>
                            Defesa em execuções de crédito, penhoras e bloqueios judiciais;
                            <br/><br/>
                            Planejamento jurídico para crescimento sustentável e seguro.
                            <br/><br/>
                            Atue com tranquilidade. Deixe a Sousa Advocacia proteger sua empresa rural com segurança e resultados.
                        </h2>

                        <Button variant="container" style={styles.button} target="_blank" href="https://wa.me/5521983654839?text=Gostaria%20de%20um%20suporte%20com%20o%20jur%C3%ADdico%20da%20Sousa%20Advocacia!">
                            <h3 style={styles.buttonText}>
                                Entre em contato
                            </h3>
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    )
}