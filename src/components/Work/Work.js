import data from "./data.json"

export const Work = () => {
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
            backgroundSize: '45% 100%',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: "70vh",
            marginBottom: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "end"
        },

        topCard: {
            backgroundColor: "#bf996f",
            width: "62.5%",
            height: "85%",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            boxSizing: "border-box",
            paddingLeft: "5vw"
        },

        bottomBox: {
            backgroundImage: "url(" + "/office-background.jpg" + ")",
            backgroundPosition: 'right',
            backgroundSize: '45% 100%',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "start"
        },

        bottomCard: {
            backgroundColor: "#bf996f",
            width: "62.5%",
            height: "85%",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "center",
            boxSizing: "border-box",
            paddingRight: "5vw"
        },

        textBox: {
            width: "70%"
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
            justifyContent: "space-between"
        },

        textCard: {
            width: "30%",
            height: "100%"
        },

        iconBox: {
            backgroundColor: "#ffffff",
            width: "2vw",
            height: "2vw",
            borderRadius: 5,
            marginBottom: "0.5vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        icon: {
            width: "1vw"
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