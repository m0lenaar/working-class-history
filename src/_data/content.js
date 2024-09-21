const header = 'Geschichte der Arbeiter:innenbewegung';
const footer = 'Jetzt liegt es an dir diese Geschichte fortzuschreiben.';
const entries = [
  {
    id: '1848-kommunistisches-manifest',
    categories: ['veröffentlichung'],
    color: 'red',
    faicon: 'book',
    date: '1848-02-21',
    title: 'Drucklegung des Kommunistischen Manifests',
    body: "Das von Karl Marx und Friedrich Engels verfasste Manifest der Kommunistischen Partei wird in den Druck gegeben. Es erschien damit kurz vor der Februarrevolution in Frankreich sowie der Märzrevolution im Deutschen Bund und in dessen größten Staaten Österreich und Preußen.",
    links: [
      {
        href: 'http://mlwerke.de/me/me04/me04_459.htm',
        linkText: 'Volltext',
      },
    ],
  },
  {
    id: '1864-iaa',
    categories: ['kongress'],
    color: 'red',
    faicon: 'users',
    date: '1864-09-28',
    title: 'Gründung der Ersten Internationale',
    body: 'Die Internationale Arbeiterassoziation (IAA), englisch International Workingmen’s Association (IWA), in der späteren Geschichtsschreibung auch Erste Internationale genannt, wird in London gegründet. Die IAA war der erste internationale Zusammenschluss von Arbeitergesellschaften, die nach den provisorischen Statuten „dasselbe Ziel verfolgen, nämlich: den Schutz, den Fortschritt und die vollständige Emanzipation der Arbeiterklasse“.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Internationale_Arbeiterassoziation',
        linkText: 'Wikipedia – Internationale Arbeiterassoziation (IAA)',
      },
    ],
  },
  {
    id: '1917-oktoberrevolution',
    categories: ['revolution'],
    color: 'red',
    faicon: 'fist-raised',
    date: '1917-11-07',
    title: 'Oktoberrevolution in Russland',
    body: 'Die Oktoberrevolution vom 25. Oktober (jul.) / 7. November 1917 (greg.) war die gewaltsame Machtübernahme durch die kommunistischen Bolschewiki unter Führung Wladimir Iljitsch Lenins in Russland. Sie beseitigte die aus der Februarrevolution hervorgegangene Doppelherrschaft der sozialistisch-liberalen Provisorischen Regierung unter Alexander Kerenski und des Petrograder Sowjets. Dies führte zu einem mehrjährigen Bürgerkrieg und nach dessen Ende 1922 zur Gründung der Sowjetunion, einer Diktatur der Kommunistischen Partei Russlands.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Oktoberrevolution',
        linkText: 'Wikipedia – Oktoberrevolution',
      },
    ],
  },
];

// Page details
const pageTitle = 'Geschichte der Arbeiter:innenbewegung'; // The title of the page that shows in the browser tab
const pageDescription = 'Eine Zeitleiste mit wesentlichen Momenten in der Geschichte der Arbeiter:innenbewegung, ohne Anspruch auf Vollständigkeit.'; // The description of the page for search engines
const pageAuthor = 'Toby'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
