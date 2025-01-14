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
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },

        box: {
            width: "60vw",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
            backgroundColor: "rgb(191, 153, 111, 0.5)",
            width: "55vw",
            height: "25vh",
            display: "flex",
            flexDirection: "row",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            margin: "3vw 0 3vw 0"
        },

        cardIcon: {
            width: "8vw",
            margin: "5vw auto 5vw auto"
        },

        cardDescription: {
            textAlign: "center"
        },

        button: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "55vw",
            height: "5vh",
            marginBottom: "2vw",
            padding: 0,
            borderRadius: 5
        }
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
                        {data.first.map((item) => {

                            return (
                                <div style={{display: "flex",width: "100%"}}>
                                    <img style={styles.cardIcon} src={item.icon} />
                                    <h3 style={styles.cardDescription}>{item.text}</h3>
                                </div>
                            )

                        })}
                    </Slider>
                </div>

                <Button variant="container" style={styles.button}>
                    <h3>
                        Entre em contato
                    </h3>
                </Button>


            </div>
        </div>
    );
}