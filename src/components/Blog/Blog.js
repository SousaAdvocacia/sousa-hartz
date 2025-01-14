import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data.json";

export const Blog = () => {
    const styles = {
        main: {
            backgroundColor: "#ffffff",
            color: "#000000",
            width: "100vw",
            height: "90vh",
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
            height: "70vh",
            display: "flex",
            flexDirection: "row"
        },

        carouselDiv: {
            display: "flex",
            justifyContent: "space-around"
        },

        carouselCard: {
            width: "17.5vw",
            height: "17vw"
        },

        cardImage: {
            backgroundColor: "#000000",
            width: "17.5vw",
            height: "15vw"
        },

        cardTitle: {
            margin: "1vh 0 1vh 0"
        },

        cardDescription: {
            fontWeight: 100,
            margin: 0
        }
    }

    return (
        <div id="blog" style={styles.main}>

            <h1 style={styles.title}>Notícias</h1>

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

                                            <div style={styles.cardImage} />

                                            <h3 style={styles.cardTitle}>{content.title}</h3>
                                            <h3 style={styles.cardDescription}>
                                                {content.description}
                                            </h3>

                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    )

                })}
            </Slider>

        </div>
    );
}