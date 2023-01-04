import { useEffect, useState } from 'react';
import { MovieRow } from '../components/MovieRow';

import Tmdb from '../services/tmdb';
import { Categorie } from '../types/categorie';

export const Home = () => {
  const [moveList, setMoveList] = useState<Categorie[]>([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list)
      setMoveList(list);
    };

    loadAll();
  }, []);

  return (
    <div>
      <span>Header</span>
      <span>Destaque</span>
      <span>Listas</span>
      <span>Footer</span>

      <section className="lists">
        {moveList.map((item, key) => (
          <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>
    </div>
  );
};
