/*
* Originais da netflix
* Recomendados (trending)
* Em alta (top rated)
* ação
* comédia
* terror
* romance
* documentários
*/

const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${import.meta.env.VITE_API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: "Originais do Netflix",
        itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
      },
      {
        slug: 'trendings',
        title: "Recomendados para você",
        itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
      },
      {
        slug: 'toprated',
        title: "Em alta",
        itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
      },
      {
        slug: 'action',
        title: "Ação",
        itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
      },
      {
        slug: 'comedy',
        title: "Comédia",
        itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
      },
      {
        slug: 'horror',
        title: "Terror",
        itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
      },
      {
        slug: 'romance',
        title: "Romance",
        itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
      },
      {
        slug: 'documentary',
        title: "Documentários",
        itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`)
      },
    ]
  }
}