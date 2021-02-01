import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Map from "./Map";
import Image1 from '../../resources/1.jpg'
import Image2 from '../../resources/2.jpg'
import Image3 from '../../resources/3.png'

const links = [{original: Image1}, {original: Image2}, {original: Image3}]

const MainPage = () => {
    return (
        <>
            <h1 className="text-center mt-4">Будь з нами - стань кращим!</h1>
            <h3 className="text-center">Стань гордістю батьків та справжнім захисником батьківщини</h3>
            <h3 className="text-center">Обираючи професію військового, не лише отримуєш освіту але й знаходиш справжніх друзів.</h3>
            <ImageContainer>
                <ImageGallery items={links}
                              showThumbnails={false}
                              showPlayButton={false}
                              showFullscreenButton={false}
                              showNav={true}
                              showBullets={true}
                />
            </ImageContainer>
            <h2 className="mt-4 mb-4 text-center">Обирайте серед десятків військових начальних закладів України!</h2>
            <Map/>
        </>
    )
}

export default MainPage;

const ImageContainer = styled.div`
  margin: 50px auto;
  img {
    max-height: 600px !important;
    object-fit: cover !important;
  }
`;