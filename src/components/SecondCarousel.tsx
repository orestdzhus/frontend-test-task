import React, { useEffect, useState } from 'react';
import '../styles/SecondCarousel.css';
import { getMovies } from '../services/data';
import { Movie } from '../services/types';
import MovieModal from './MovieModal';

const SecondCarousel: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const data: Movie[] = getMovies();
    const reversedSlice = data.slice(0, 10).reverse();
    setMovies(reversedSlice); 
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="second-carousel">
      <h2>Top 10 in India - Today</h2>
      <div className="carousel">
        {movies.map((movie, index) => (
          <div key={movie.id} className="carousel-item" onClick={openModal}>
            <div className="carousel-item-number">{index + 1}</div>
            <img src={movie.thumbnail_horizontal} alt={movie.title} />
            <div className="carousel-item-details">
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
      <MovieModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default SecondCarousel;
