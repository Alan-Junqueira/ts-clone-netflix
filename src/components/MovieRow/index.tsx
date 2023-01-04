import { Result } from '../../types/result';
import './styles.css';

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
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listArea">
        <div className="movieRow--list">
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
