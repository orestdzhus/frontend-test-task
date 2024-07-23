import React from 'react';
import '../styles/Navigation.css';
import homeIcon from "../icons/home.png";
import tvIcon from "../icons/tv.png";
import moviesIcon from "../icons/movies.png";
import sportsIcon from "../icons/sport.png";
import categoriesIcon from "../icons/categories.png";

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src="https://images.ctfassets.net/y2ske730sjqp/2psbeTanEkNNtnizCr9IrG/a1ba11ec4046fbcef6b217ef4ca242fb/BrandAssets_Logos_06-SpecialUse_02.jpg?w=460" alt="Logo" width="80" height="50" />
      </div>
      <ul>
        <li><img src={homeIcon} alt='Home'/><span>Home</span></li>
        <li><img src={tvIcon} alt="TV" /><span>TV</span></li>
        <li><img src={moviesIcon} alt="Movies" /><span>Movies</span></li>
        <li><img src={sportsIcon} alt="Sports" /><span>Sports</span></li>
        <li><img src={categoriesIcon} alt="Categories" /><span>Categories</span></li>
      </ul>
    </nav>
  );
};

export default Navigation;
