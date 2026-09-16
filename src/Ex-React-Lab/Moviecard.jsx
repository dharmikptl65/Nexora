import React, { useEffect, useState } from "react";
import "./Moviecard.css";

function Moviecard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedCards, setAnimatedCards] = useState([]);

  const movies = [
    {
      title: "Dragon",
      genre: "Action • Thriller • Drama",
      rating: "8.8",
      year: "2026",
      description:
        "A powerful action entertainer filled with intense moments and cinematic energy.",
      image:
        "https://cdna.artstation.com/p/assets/images/images/027/892/198/large/shiva-saket-master.jpg?1592870905",
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi • Adventure • Drama",
      rating: "8.7",
      year: "2014",
      description:
        "A breathtaking journey beyond the stars where humanity searches for a new home.",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/026/453/473/large/shiva-saket-69-2.jpg?1588818133",
    },
    {
      title: "The Batman",
      genre: "Crime • Action • Thriller",
      rating: "7.8",
      year: "2022",
      description:
        "Batman enters the shadows of Gotham to uncover a dangerous mystery.",
      image:
        "https://i.pinimg.com/736x/6b/a9/1c/6ba91c9b59d530375e247a425647216b.jpg",
    },
    {
      title: "Joker",
      genre: "Crime • Drama • Thriller",
      rating: "8.4",
      year: "2019",
      description:
        "A troubled man slowly descends into a world of chaos and transformation.",
      image:
        "https://i.pinimg.com/1200x/32/82/eb/3282eb50cb0c5430d2c994e89d601829.jpg",
    },
    {
      title: "John Wick",
      genre: "Action • Crime • Thriller",
      rating: "7.4",
      year: "2014",
      description:
        "A legendary assassin returns to the underworld for one final mission.",
      image:
        "https://i.pinimg.com/736x/58/6a/11/586a1102690ba887e54dba014208dad4.jpg",
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const timers = [];

    movies.forEach((_, index) => {
      const timer = setTimeout(() => {
        setAnimatedCards((previous) => [...previous, index]);
      }, 180 * index);

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="movie-selector-section">
      <div className="movie-selector-container">
        {/* ================= HEADER ================= */}

        <div className="movie-selector-header">
          <div className="movie-selector-eyebrow">
            <span></span>
            Explore Cinema
          </div>

          <h2>Choose your next movie</h2>

          <p>
            Explore unforgettable stories, iconic characters and cinematic
            experiences.
          </p>
        </div>

        {/* ================= MOVIE CARDS ================= */}

        <div className="movie-selector">
          {movies.map((movie, index) => {
            const isActive = activeIndex === index;
            const isAnimated = animatedCards.includes(index);

            return (
              <div
                key={movie.title}
                className={`movie-selector-card ${
                  isActive ? "active" : ""
                } ${isAnimated ? "show" : ""}`}
                onClick={() => handleCardClick(index)}
                style={{
                  backgroundImage: `url("${movie.image}")`,
                }}
              >
                {/* Background overlay */}

                <div className="movie-selector-overlay"></div>

                {/* Bottom shadow */}

                <div
                  className={`movie-selector-shadow ${
                    isActive ? "shadow-active" : ""
                  }`}
                ></div>

                {/* ================= CARD CONTENT ================= */}

                <div className="movie-selector-label">
                  {/* Movie information */}

                  <div className="movie-selector-info">
                    <h3
                      className={
                        isActive
                          ? "movie-selector-title visible"
                          : "movie-selector-title"
                      }
                    >
                      {movie.title}
                    </h3>

                    <div
                      className={
                        isActive
                          ? "movie-selector-details visible"
                          : "movie-selector-details"
                      }
                    >
                      <span>{movie.genre}</span>

                      <div className="movie-selector-meta">
                        <span>{movie.rating}</span>

                        <span>{movie.year}</span>
                      </div>
                    </div>

                    <p
                      className={
                        isActive
                          ? "movie-selector-description visible"
                          : "movie-selector-description"
                      }
                    >
                      {movie.description}
                    </p>
                  </div>
                </div>

                {/* Active indicator */}

                <div
                  className={`movie-selector-active-line ${
                    isActive ? "active" : ""
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM HINT ================= */}

        <div className="movie-selector-hint">
          <span>Click a movie to explore</span>
        </div>
      </div>
    </section>
  );
}

export default Moviecard;
