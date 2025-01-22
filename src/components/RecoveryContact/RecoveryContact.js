import { Button, useMediaQuery } from "@mui/material";

export const RecoveryContact = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "space-between"
        },
    
        card: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isMobile ? "30vw" : "100vw",
            height: isMobile ? "auto" : "40vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            margin: "5vh 0 5vh 0",
            padding: "3vw 0 3vw 0"
        },
    
        title: {
            width: isMobile ? "25vw" : "80vw",
            fontSize: isMobile ? "" : "20px"
        },
    
        iconRow: {
            width: isMobile ? "25vw" : "80vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start"
        },
    
        icon: {
            height: "3vh",
            marginRight: "1vw"
        },
    
        description: {
            width: isMobile ? "25vw" : "80vw",
            fontWeight: 300
        },
    
        form: {
            width: isMobile  ? "30vw" : "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "left",
            marginBottom: isMobile ? 0 : "5vh"
        },
    
        label: {
            width: isMobile ? "25vw" : "80vw",
            margin: 0
        },
    
        input: {
            background: "none",
            color: "#757575",
            width: isMobile ? "25vw" : "80vw",
            height: "5vh",
            marginBottom: "2.5vh",
            boxSizing: "border-box",
            paddingLeft: "1vw",
            borderWidth: "0 0 0.5vh 0",
            borderColor: "#000000",
            borderRadius: 10,
            outlineWidth: 0
        },
    
        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: isMobile ? "25vw" : "80vw",
            height: "auto",
            padding : 0,
            borderRadius: 5
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },
    }

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
                    Jonathan Sousa
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
                    <h3 style={styles.buttonText}>
                        Entre em contato
                    </h3>
                </Button>
            </div>
        </div>
    );
}