import { useMediaQuery } from "@mui/system"

export const Title = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const styles = {
        main: {
            backgroundImage: "url(" + "/office-background.jpg" + ")",
            backgroundPosition: isDesktop ? 'center' : "top",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: "#ffffff",
            width: "100vw",
            height: isDesktop? "100vh" : "50vh",
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
            width: isDesktop ? "60vw" : "100vw",
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center",
            textAlign: isDesktop ? "left" : "center"
        },
        
        title: {
            width: isDesktop ? "25vw" : "80vw",
            fontSize: isDesktop ? "3vw" : "30px",
            margin : 0,
            filter: "drop-shadow(3px 3px 3px #000000)"
        },

        description: {
            width: isDesktop ? "25vw" : "80vw",
            fontSize: isDesktop ? "" : "18px",
            fontWeight: 100,
            filter: "drop-shadow(3px 3px 3px #000000)"
        }
    }

    return (
        <div style={styles.main}>
            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>Sousa Advocacia</h1>

                    <h2 style={styles.description}>
                        Atuação consultiva e contenciosa em Direito Empresarial, Tributário, Bancário, Cível e áreas afins. Especialidade em Recuperação Judicial,
                        planejamento sucessório e patrimonial.
                    </h2>

                </div>

            </div>
        </div>
    )
}