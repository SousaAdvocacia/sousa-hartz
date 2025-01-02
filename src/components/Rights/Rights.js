import data from "./data.json"

export const Rights = () => {

    const styles = {
        main: {
            backgroundColor: "#ffffff",
            width: "100vw",
            height: "65vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        box: {
            width: "70%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2.5vh"
        },

        textBox: {
            width: "90%",
            height: "80%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "left"
        },

        title: {
            width: "90%",
            margin: 0
        },

        subtitle: {
            width: "100%",
            fontWeight: 100,
            margin: "0 0 2vh 0"
        },

        text: {
            width: "50%",
            display: "flex",
            flexDirection: "column"
        },

        description: {
            width: "90%",
            fontWeight: 100
        },

        imageBox: {
            width: "40%",
            height: "100%",
            display: "flex",
            alignItems: "center"
        },

        image: {
            width: "100%"
        }
    }

    return (
        <div style={styles.main}>

            <div style={styles.box}>

                <div style={styles.textBox}>

                    <h1 style={styles.title}>Principais direitos do segurado:</h1>
                    <h2 style={styles.subtitle}>Conhecimento, experiência e comprometimento</h2>

                    {data.map((item) => {
                        return (
                            <div style={styles.text}>
                                <h2 style={styles.title}>{item.title}</h2>
                                <h3 style={styles.description}>{item.description}</h3>
                            </div>
                        );
                    })}

                </div>

                <div style={styles.imageBox}>

                    <img style={styles.image} src="https://rutzen.adv.br/wp-content/uploads/2022/03/Mask-group.png" />

                </div>

            </div>

        </div>
    );
}