// import React from "react";
import image1 from "../ApartmentDetailMain/images/image1.jpg";
import image2 from "../ApartmentDetailMain/images/image2.jpg";
import image3 from "../ApartmentDetailMain/images/image3.jpg";

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import styles from "./lightbox.module.css";

const LightBox = ({ images }) => {
    return (
        <div>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div>
                        <div id={styles.row}>
                            {images.map((img, index) => (
                                <div>
                                    <img
                                        className={styles.image}
                                        src={img}
                                        alt={"Image " + index}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </div>
    );
};

export default LightBox;
