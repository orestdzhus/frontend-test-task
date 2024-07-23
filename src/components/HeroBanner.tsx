import React, { useState, useEffect } from 'react';
import '../styles/HeroBanner.css';
import movieData from '../services/movie-data-json-pastecode_io.json';
import MovieModal from './MovieModal'; // Імпорт MovieModal

interface HeroBannerProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const movies: HeroBannerProps[] = movieData.slice(0, 5).map(movie => ({
    title: movie.title,
    description: `Premier League 2023/24 - 6m - Football`,
    buttonText: 'Watch Now',
    backgroundImage: movie.thumbnail_vertical,
  }));

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % movies.length);
    }, 9000);

    return () => clearInterval(slideInterval);
  }, [movies.length]);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${movies[currentSlide].backgroundImage})` }}>
      <div className="content">
        <h1>{movies[currentSlide].title}</h1>
        <p>{movies[currentSlide].description}</p>
        <button onClick={openModal}>{movies[currentSlide].buttonText}</button>
      </div>
      <MovieModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default HeroBanner;
