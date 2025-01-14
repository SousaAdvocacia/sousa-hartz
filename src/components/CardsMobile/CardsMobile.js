import { Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data.json";

export const CardsMobile = () => {

    const styles = {
        main: {
            backgroundColor: "#000000",
            color: "#ffffff",
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },

        box: {
            width: "60vw",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "5vh 0 5vh 0"
        },

        title: {
            width: "85vw",
            fontWeight: 800
        },

        description: {
            width: "85vw",
            fontWeight: 300
        },

        carouselRow: {
            width: "55vw",
            display: "flex",
            flexDirection: "row",
            marginBottom: "1.5vw",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center"
        },

        carousel: {
            width: "55vw",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: "3vw 0 3vw 0",
        },

        card: {
            backgroundColor: "rgb(191, 153, 111, 0.5)",
            width: "90%",
            height: "27.5vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            margin: "0 auto 0 auto",
            padding: "5vw 2vw 5vw 2vw",
            borderRadius: 15
        },

        cardIcon: {
            width: "12vw",
            margin: "5vw auto 5vw auto"
        },

        cardDescription: {
            textAlign: "center"
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "55vw",
            height: "auto",
            marginBottom: "2vw",
            padding: 0,
            borderRadius: 5
        },

        buttonText: {
            margin: "0.5vw 0.5vh 0.5vw 0.5vw"
        },
    }

    return (
        <div style={styles.main}>
            <div style={styles.box}>

                <h2 style={styles.title}>• DIFERENCIAIS</h2>

                <h3 style={styles.description}>
                    Nosso escritório se destaca por apresentar soluções completas para dívidas concursais (Recuperação Judicial) e extraconcursais
                    (que não entram na Recuperação Judicial), seja para empresas de pequeno, médio ou grande porte.
                </h3>

                <div style={styles.carouselRow}>
                    <Slider style={styles.carousel} settings={{
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }}>
                        {data.content.map((item) => {

                            return (
                                <div>
                                    <div style={styles.card}>
                                        <img style={styles.cardIcon} src={item.icon} />
                                        <h3 style={styles.cardDescription}>{item.text}</h3>
                                    </div>
                                </div>
                            )

                        })}
                    </Slider>
                </div>

                <Button variant="container" style={styles.button}>
                    <h3 style={styles.buttonText}>
                        Entre em contato
                    </h3>
                </Button>


            </div>
        </div>
    );
}