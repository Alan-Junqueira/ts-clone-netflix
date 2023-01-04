import { Result } from '../../types/result';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import './styles.css';
import { useState } from 'react';
interface IMovieRow {
  title: string;
  itens: {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
  };
}

export const MovieRow = ({ title, itens }: IMovieRow) => {
  const [scrollX, setScrollX] = useState(0);
  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = itens.results.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 260;
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2 className="movieRow--title">{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: '5rem' }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: '5rem' }} />
      </div>
      <div className="movieRow--listArea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: `${itens.results.length * 15}rem`
          }}
        >
          {itens.results &&
            itens.results.map((iten, index) => (
              <div className="movieRow--iten" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${iten.poster_path}`}
                  alt={iten.name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
