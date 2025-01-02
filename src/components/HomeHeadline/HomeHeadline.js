import { fontWeight } from "@mui/system"

export const Title = () => {
    const styles = {
        main: {
            backgroundImage: "url(" + "/office-background.jpg" + ")",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "#ffffff",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column"
        },

        box: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box"
        },

        textBox: {
            width: "60vw",
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center"
        },
        
        title: {
            width: "25vw",
            fontSize: "3vw",
            margin : 0,
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        description: {
            width: "25vw",
            fontWeight: 100,
            filter: "drop-shadow(3px 3px 3px #000000)"
        }
    }

    return (
        <div style={styles.main}>
            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>Sousa Hartz Advocacia</h1>

                    <h2 style={styles.description}>
                        Atuação consultiva e contenciosa em Direito Empresarial, Tributário, Bancário, Cível e áreas afins. Especialidade em Recuperação Judicial,
                        planejamento sucessório e patrimonial.
                    </h2>

                </div>

            </div>
        </div>
    )
}