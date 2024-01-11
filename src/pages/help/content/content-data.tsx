import { HelpSection } from "./content-model";
import { AboutContent } from "./data/About-Content";

import { UserInterfaceContent } from "./data/User-Interface-Content";
import { ContainsEachCharacterAndHelpContent } from "./data/filters-help-content/Contains-Each-Char-And-Help-Content";
import { ContainsEachCharacterOrHelpContent } from "./data/filters-help-content/Contains-Each-Char-Or-Help-Content copy";
import { ContainsPhraseFilterHelpContent } from "./data/filters-help-content/Contains-Phrase-Filter-Help-Content";
import { EndsWithFilterHelpContent } from "./data/filters-help-content/Ends-With-Filter-Help-Content";
import { StartsWithFilterHelpContent } from "./data/filters-help-content/Starts-With-Filter-Help-Content";
import { WildCardFilterHelpContent } from "./data/filters-help-content/Wildcard-Filter-Help-Content";
import { WordSizeFilterHelpContent } from "./data/filters-help-content/Word-Size-Filter-Help-Content";

export const HELP_PAGE_CONTENT_DATA: HelpSection[] = [
  {
    title: "Getting Started",
    subtitles: [
      {
        title: "About",
        id: 0,
        article: {
          title: "About",
          body: <AboutContent />,
        },
      },
      {
        title: "User Interface",
        id: 1,
        article: {
          title: "User Interface",
          body: <UserInterfaceContent />,
        },
      },
    ],
  },
  {
    title: "Filter Functions",
    subtitles: [
      {
        title: "Wildcard",
        id: 2,
        article: {
          title: "Wildcard",
          body: <WildCardFilterHelpContent />,
        },
      },
      {
        title: "Word Size",
        id: 3,
        article: {
          title: "Word Size",
          body: <WordSizeFilterHelpContent />,
        },
      },
      {
        title: "Starts With",
        id: 4,
        article: {
          title: "Starts With",
          body: <StartsWithFilterHelpContent />,
        },
      },
      {
        title: "Ends With",
        id: 5,
        article: {
          title: "Ends With",
          body: <EndsWithFilterHelpContent />,
        },
      },
      {
        title: "Contains Phrase",
        id: 6,
        article: {
          title: "Contains Phrase",
          body: <ContainsPhraseFilterHelpContent />,
        },
      },
      {
        title: "Contains Each Character (AND)",
        id: 7,
        article: {
          title: "Contains Each Character (AND)",
          body: <ContainsEachCharacterAndHelpContent />,
        },
      },
      {
        title: "Contains Each Character (OR)",
        id: 8,
        article: {
          title: "Contains Each Character (OR)",
          body: <ContainsEachCharacterOrHelpContent />,
        },
      },
    ],
  },
];
