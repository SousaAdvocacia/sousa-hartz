import { useMediaQuery } from "@mui/material";
import data from "./data.json"

export const Work = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');
    
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
            backgroundImage: isDesktop ? "url(" + "/office-bg.jpg" + ")" : "",
            backgroundPosition: 'left',
            backgroundSize: isDesktop ? '45% 100%' : "100% 100%",
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: isDesktop ? "auto" : "110vh",
            marginBottom: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: isDesktop ? "end" : "center"
        },

        topCard: {
            backgroundColor: "#bf996f",
            width: isDesktop ? "62.5%" : "100%",
            height: "auto",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: isDesktop ? "start" : "center",
            justifyContent: "center",
            boxSizing: "border-box",
            margin: "8vh 0 8vh 0",
            padding: isDesktop ? "5vh 0 5vh 5vw" : "0 5vw 0 5vw"
        },

        bottomBox: {
            backgroundImage: isDesktop ? "url(" + "/office-bg.jpg" + ")" : "",
            backgroundPosition: 'right',
            backgroundSize: isDesktop ? '45% 100%' : "100% 100%",
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: isDesktop ? "auto" : "110vh",
            display: "flex",
            alignItems: "center",
            justifyContent: isDesktop ? "start" : "center"
        },

        bottomCard: {
            backgroundColor: "#bf996f",
            width: isDesktop ? "62.5%" : "100%",
            height: "auto",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: isDesktop ? "end" : "center",
            justifyContent: "center",
            boxSizing: "border-box",
            margin: "8vh 0 8vh 0",
            padding: isDesktop ? "5vh 5vw 5vh 0" : "0 5vw 0 5vw"
        },

        textBox: {
            width: isDesktop ? "70%" : "100%"
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
            flexDirection: isDesktop ? "row" : "column",
            justifyContent: "space-between"
        },

        textCard: {
            width: isDesktop ? "30%" : "100%",
            height: "100%"
        },

        iconBox: {
            backgroundColor: "#ffffff",
            width: isDesktop ? "2vw" : "10vw",
            height: isDesktop ? "2vw" : "10vw",
            borderRadius: 5,
            marginBottom: "0.5vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        icon: {
            width: isDesktop ? "1vw" : "7vw"
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