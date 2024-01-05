export interface HelpSection {
  title: string;
  subtitles: Subtitle[];
}

interface Subtitle {
  title: string;
  article: Article;
}

interface Article {
  title: string;
  body: JSX.Element;
}
