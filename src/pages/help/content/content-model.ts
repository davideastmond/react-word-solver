export interface HelpSection {
  title: string;
  subtitles: Subtitle[];
}

export interface Subtitle {
  id: number;
  title: string;
  article: Article;
}

interface Article {
  title: string;
  body: JSX.Element;
}
