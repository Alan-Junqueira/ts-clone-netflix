import { Info } from '../../types/info';
import './styles.css';

interface IFeaturedMovie {
  iten: Info;
}

export const FeaturedMovie = ({ iten }: IFeaturedMovie) => {
  console.log('iten', iten);

  let firstDate = new Date(iten.first_air_date);
  let genres = [];
  for (let i in iten.genres) {
    genres.push(iten.genres[i].name);
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${iten.backdrop_path})`
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h2 className="featured--name">{iten.original_name}</h2>
          <div className="featured--info">
            <span className="featured--points">{iten.vote_average} pontos</span>
            <span className="featured--year">{firstDate.getFullYear()}</span>
            <span className="featured--seasons">
              {iten.number_of_seasons} temporada
              {iten.number_of_seasons > 1 ? 's' : ''}
            </span>
          </div>
          <p className="featured--description">
            {iten.overview
              ? iten.overview
              : '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt veritatis obcaecati accusantium commodi optio, ipsum illum, temporibus repellendus, sint magnam! Cumque rerum quasi vero perferendis at, placeat distinctio nostrum.'}
          </p>
          <div className="featured--buttons">
            <a className="featured--watch-button" href={`/watch/${iten.id}`}>
              ▶ Assistir
            </a>
            <a
              className="featured--my-list-button"
              href={`/list/add/${iten.id}`}
            >
              + Minha Lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Gêneros: </strong>
            {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
};
