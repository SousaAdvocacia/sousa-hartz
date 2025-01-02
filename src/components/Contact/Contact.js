import { Button } from "@mui/material";
import { borderColor, boxSizing, display, fontWeight, textAlign } from "@mui/system";

export const Contact = () => {
    return(
        <div style={styles.main}>
            <div style={styles.card}>
                <h1 style={styles.title}>Entre em contato conosco para explicarmos como funcionam nossos serviços e passarmos um orçamento.</h1>

                <div style={styles.iconRow}>

                    <img style={styles.icon} src="/instagram.png"/>
                    <img style={styles.icon} src="/linkedin.png"/>

                </div>

                <h3 style={styles.description}>
                    (01) 2345-6789
                    <br/>
                    Sousa Hartz
                    <br/>
                    Rua X 1234, Bairro X
                    <br/>
                    Rio de Janeiro, RJ - CEP: 12345-678
                </h3>
            </div>

            <div style={styles.form}>
                <h3 style={styles.label}>Nome</h3>
                <input placeholder="Nome" style={styles.input}></input>

                <h3 style={styles.label}>E-mail</h3>
                <input placeholder="E-mail" style={styles.input}></input>

                <h3 style={styles.label}>Telefone</h3>
                <input placeholder="Telefone" style={styles.input}></input>

                <h3 style={styles.label}>Mensagem</h3>
                <input placeholder="Deixe aqui sua mensagem" style={styles.input}></input>

                <Button variant="container" style={styles.button}>
                    <h3>
                        Entre em contato
                    </h3>
                </Button>
            </div>
        </div>
    );
}

const styles = {
    main: {
        backgroundColor: "#ffffff",
        color: "#000000",
        width: "100vw",
        height: "70vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    card: {
        backgroundColor: "#bf996f",
        color: "#ffffff",
        width: "30vw",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },

    title: {
        width: "25vw"
    },

    iconRow: {
        width: "25vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    icon: {
        height: "3vh",
        marginRight: "1vw"
    },

    description: {
        width: "25vw",
        fontWeight: 300
    },

    form: {
        width: "30vw",
        height: "45vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "left"
    },

    label: {
        width: "25vw",
        margin: 0
    },

    input: {
        background: "none",
        color: "#757575",
        width: "25vw",
        height: "5vh",
        marginBottom: "2.5vh",
        boxSizing: "border-box",
        paddingLeft: "1vw",
        borderWidth: "0 0 0.5vh 0",
        borderColor: "#000000",
        borderRadius: 10,
        fontSize: "1vw",
        outlineWidth: 0
    },

    button: {
        backgroundColor: "#bf996f",
        color: "#ffffff",
        width: "25vw",
        height: "5vh",
        marginBottom: "2vw",
        borderRadius: 5
    }
}