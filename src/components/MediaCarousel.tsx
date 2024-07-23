import React, { useEffect, useState } from 'react';
import '../styles/MediaCarousel.css';
import { getMovies } from '../services/data';
import { Movie } from '../services/types';
import MovieModal from './MovieModal'; // Імпорт MovieModal

const MediaCarousel: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const data: Movie[] = getMovies();
    setMovies(data);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="media-carousel">
      <h2>Top 20</h2>
      <div className="carousel">
        {movies.map((movie) => (
          <div key={movie.id} className="carousel-item" onClick={openModal}>
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

export default MediaCarousel;
