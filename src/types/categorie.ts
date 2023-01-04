import { Result } from "./results";

export type Categorie = {
  slug: string;
  title: string;
  itens: {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number
  };
}