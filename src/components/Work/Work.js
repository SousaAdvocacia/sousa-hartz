import { useMediaQuery } from "@mui/material";
import data from "./data.json"

export const Work = () => {

    const isMobile = useMediaQuery('(min-width:1000px)');
    
    const styles = {
        main: {
            backgroundColor: "#ffffff",
            color: "#ffffff",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column"
        },

        topBox: {
            backgroundImage: "url(" + "/office-background.jpg" + ")",
            backgroundPosition: 'left',
            backgroundSize: isMobile ? '45% 100%' : "100% 100%",
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: isMobile ? "auto" : "110vh",
            marginBottom: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "end" : "center"
        },

        topCard: {
            backgroundColor: "#bf996f",
            width: isMobile ? "62.5%" : "100%",
            height: "auto",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "start" : "center",
            justifyContent: "center",
            boxSizing: "border-box",
            margin: "8vh 0 8vh 0",
            padding: isMobile ? "5vh 0 5vh 5vw" : "0 5vw 0 5vw"
        },

        bottomBox: {
            backgroundImage: "url(" + "/office-background.jpg" + ")",
            backgroundPosition: 'right',
            backgroundSize: isMobile ? '45% 100%' : "100% 100%",
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: isMobile ? "auto" : "110vh",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "start" : "center"
        },

        bottomCard: {
            backgroundColor: "#bf996f",
            width: isMobile ? "62.5%" : "100%",
            height: "auto",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "end" : "center",
            justifyContent: "center",
            boxSizing: "border-box",
            margin: "8vh 0 8vh 0",
            padding: isMobile ? "5vh 5vw 5vh 0" : "0 5vw 0 5vw"
        },

        textBox: {
            width: isMobile ? "70%" : "100%"
        },

        title: {
            margin: "0 0 1vw 0"
        },

        description: {
            fontWeight: 100,
            marginBottom: "3vw"
        },

        textSection: {
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            justifyContent: "space-between"
        },

        textCard: {
            width: isMobile ? "30%" : "100%",
            height: "100%"
        },

        iconBox: {
            backgroundColor: "#ffffff",
            width: isMobile ? "2vw" : "10vw",
            height: isMobile ? "2vw" : "10vw",
            borderRadius: 5,
            marginBottom: "0.5vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        icon: {
            width: isMobile ? "1vw" : "7vw"
        }
    }

    return (
        <div style={styles.main}>
            <div style={styles.topBox}>

                <div style={styles.topCard}>

                    <div style={styles.textBox}>
                        <h1 style={styles.title}>Atuação consultiva e contenciosa</h1>

                        <h2 style={styles.description}>
                            Somos advogados especialistas em Direito Empresarial e Securitário. Entenda como podemos ajudar você:
                        </h2>

                        <div style={styles.textSection}>

                            {data.top.map((item) => {
                                return (
                                    <div style={styles.textCard}>
                                        <div style={styles.iconBox}>

                                            <img style={styles.icon} src={item.icon}/>

                                        </div>

                                        <h2 style={styles.title}>{item.title}</h2>

                                        <h3 style={styles.description}>{item.description}</h3>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>

            </div>

            <div style={styles.bottomBox}>

                <div style={styles.bottomCard}>

                    <div style={styles.textBox}>
                        <h1 style={styles.title}>Atuação consultiva e contenciosa</h1>

                        <h2 style={styles.description}>
                            Somos advogados especialistas em Direito Empresarial e Securitário. Entenda como podemos ajudar você:
                        </h2>

                        <div style={styles.textSection}>

                            {data.bottom.map((item) => {
                                return (
                                    <div style={styles.textCard}>
                                        <div style={styles.iconBox}>

                                            <img style={styles.icon} src={item.icon}/>

                                        </div>

                                        <h2 style={styles.title}>{item.title}</h2>

                                        <h3 style={styles.description}>{item.description}</h3>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}