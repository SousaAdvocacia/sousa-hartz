import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataDesktop from "./dataDesktop.json";
import dataMobile from "./dataMobile.json"
import { useMediaQuery } from "@mui/material";

export const Partners = () => {

    const isDesktop = useMediaQuery('(min-width:1000px)');

    const data = isDesktop ? dataDesktop : dataMobile;

    const styles = {
        main: {
            backgroundColor: "#bf996f",
            color: "#ffffff",
            width: "100vw",
            height: "40vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },

        title: {
            marginBottom: "4vh"
        },

        carousel: {
            width: "60vw",
            height: "20vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },

        carouselDiv: {
            display: "flex",
            justifyContent: "space-around"
        },

        carouselCard: {
            backgroundColor: "#ffffff",
            width: isDesktop ? "14vw" : "50vw",
            height: isDesktop ? "10vw" : "30vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },

        carouselImage: {
            width: isDesktop ? "7.5vw" : "27.5vw"
        }
    }

    return (
        <div style={styles.main}>
            <h1 style={styles.title}>Parceiros e Escritórios Associados</h1>

            <Slider style={styles.carousel} settings={{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }}>

                {data.map((item) => {

                    return (
                        <div>
                            <div style={styles.carouselDiv}>

                                {item.map((content) => {
                                    return (
                                        <div style={styles.carouselCard}>
                                            <img style={styles.carouselImage} src={content.image} />
                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    )

                })}
            </Slider>
        </div>
    )
}