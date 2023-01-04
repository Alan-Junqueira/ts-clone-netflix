import { useEffect, useState } from 'react';
import { FeaturedMovie } from '../../components/FeaturedMovie';
import { MovieRow } from '../../components/MovieRow';
import { Footer } from '../../components/partials/Footer';
import { Header } from '../../components/partials/Header';

import Tmdb from '../../services/tmdb';
import { Categorie } from '../../types/categorie';
import { Info } from '../../types/info';
import { Result } from '../../types/result';

import './styles.css';

export const Home = () => {
  const [moveList, setMoveList] = useState<Categorie[]>([]);
  const [featuredData, setFeaturedData] = useState<Info | null>(null);
  const [blackHeader, setBlackHeader] = useState<boolean>(false);

  useEffect(() => {
    const loadAll = async () => {
      //* Pegando a lista
      let list = await Tmdb.getHomeList();
      setMoveList(list);

      //* Pegando o filme em destaque (featured)
      let originals = list.filter((i) => i.slug === 'originals');
      let randonChosen = Math.floor(
        Math.random() * (originals[0].itens.results.length - 1)
      );
      let chosenMovie: Result = originals[0].itens.results[randonChosen];
      let chosenMovieInfo = await Tmdb.getMovieInfo(chosenMovie.id, 'tv');
      console.log(chosenMovieInfo);
      setFeaturedData(chosenMovieInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <>
      <Header black={blackHeader} />
      {featuredData !== null && featuredData && (
        <FeaturedMovie iten={featuredData} />
      )}

      <section className="lists">
        {moveList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>
      <Footer />
    </>
  );
};
