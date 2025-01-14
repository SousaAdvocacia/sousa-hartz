import { Button } from "@mui/material"
import { fontWeight } from "@mui/system"

export const ContactOld = () => {
    const styles = {
        main: {
            backgroundImage: "url(" + "/contact-bg.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "#ffffff",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        box: {
            width: "60%",
            height: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },

        textBox: {
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },

        title: {
            fontSize: "50px",
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        description: {
            fontWeight: 300,
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        card: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "40%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        form: {
            width: "80%",
            height: "80%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between"
        },

        halfInput: {
            background: "none",
            color: "#757575",
            width: "45%",
            height: "5vh",
            marginBottom: "2.5vh",
            boxSizing: "border-box",
            paddingLeft: "0.5vw",
            borderWidth: "0 0 0.2vh 0",
            borderColor: "#000000",
            fontSize: "0.75vw",
            outlineWidth: 0
        },

        input: {
            background: "none",
            color: "#757575",
            width: "100%",
            height: "5vh",
            marginBottom: "2.5vh",
            boxSizing: "border-box",
            paddingLeft: "0.5vw",
            borderWidth: "0 0 0.2vh 0",
            borderColor: "#000000",
            fontSize: "0.75vw",
            outlineWidth: 0
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "100%",
            height: "auto",
            borderRadius: 5,
            padding: 0
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },
    }

    return (
        <div style={styles.main}>

            <div style={{ height: "10vh" }} />

            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>Deixe suas dúvidas através de nosso formulário.</h1>

                    <h3 style={styles.description}>
                        Av. Ipiranga 7464 / 821, Jardim Botânico, Porto Alegre, RS - CEP: 91530-000
                        <br />
                        (51) 98117-8431
                        <br />
                        (51) 98117-8431
                        <br />
                        marcos@rutzenadvogados.com.br
                        <br />
                        marcos@rutzen.adv.br
                    </h3>

                </div>

                <div style={styles.card}>

                    <div style={styles.form}>

                        <input placeholder="Nome" style={styles.halfInput}></input>
                        <input placeholder="Sobrenome" style={styles.halfInput}></input>

                        <input placeholder="Celular" style={styles.halfInput}></input>
                        <input placeholder="Assunto" style={styles.halfInput}></input>

                        <input placeholder="E-mail" style={styles.input}></input>
                        <input placeholder="Mensagem" style={styles.input}></input>

                        <Button variant="container" style={styles.button}>
                            <h3 style={styles.buttonText}>
                                ENVIAR MENSAGEM
                            </h3>
                        </Button>

                    </div>

                </div>

            </div>

        </div>
    )
}