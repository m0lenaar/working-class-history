const header = 'Geschichte der Arbeiter:innenbewegung';
const footer = 'Jetzt liegt es an dir diese Geschichte fortzuschreiben.';
const entries = [
  {
    id: '1847-bund-der-kommunisten',
    categories: ['kongress'],
    color: 'red',
    faicon: 'users',
    date: '1847-11-29',
    title: 'Zweiter Kongress des Bundes der Kommunisten',
    body: 'Vom 29. November bis 8. Dezember 1847 findet zweite Kongress des Bundes der Kommunisten statt. Marx und Engels werden beauftragt, das Manifest der Kommunistischen Partei auszuarbeiten.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Bund_der_Kommunisten',
        linkText: 'Bund der Kommunisten – Wikipedia',
      },
    ],
  },
  {
    id: '1848-kommunistisches-manifest',
    categories: ['veröffentlichung'],
    color: 'red',
    faicon: 'book',
    date: '1848-02-21',
    title: 'Drucklegung des Kommunistischen Manifests',
    body: "Das von Karl Marx und Friedrich Engels verfasste Manifest der Kommunistischen Partei wird in den Druck gegeben. Es erscheint noch vor der Februarrevolution in Frankreich sowie der Märzrevolution im Deutschen Bund.",
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Manifest_der_Kommunistischen_Partei',
        linkText: 'Manifest der Kommunistischen Partei – Wikipedia',
      },
      {
        href: 'http://mlwerke.de/me/me04/me04_459.htm',
        linkText: 'Manifest der Kommunistischen Partei – Volltext',
      },
    ],
  },
  {
    id: '1963-adav',
    categories: ['kongress'],
    color: 'red',
    faicon: 'users',
    date: '1863-05-23',
    title: 'Gründung des Allgemeinen Deutschen Arbeitervereins (ADAV)',
    body: 'Mit dem ADAV wird in Leipzig die erste Massenpartei der deutschen Arbeiterbewegung und eine der Vorläuferorganisationen der SPD gegründet. Maßgeblich beteiligt ist Ferdinand Lassalle.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Allgemeiner_Deutscher_Arbeiterverein',
        linkText: 'Allgemeiner Deutscher Arbeiterverein – Wikipedia',
      },
    ],
  },
  {
    id: '1864-tod-lassalle',
    color: 'red',
    faicon: 'cross',
    date: '1864-08-31',
    title: 'Tod von Ferdinand Lassalle',
    body: 'Lassalle wird bei einem Duell um Helene von Dönniges tödlich am Hoden verletzt. Der Lassalle nicht immer wohlgesonnene Marx kommentiert dessen Tod in einem Brief an Engels spöttisch »Aber was ist das für eine sonderbare Art, ums Leben zu kommen [...] Das konnte nur dem L[assalle] passieren«, brachte ihm allerdings auch einen gewissen Respekt entgegen: »Welcher Jubel wird unter den Fabrikanten und unter den Fortschrittsschweinhunden [(gemeint ist die liberale Deutsche Fortschrittspartei)] herrschen, L[assalle] war doch der einzige Kerl in Deutschland selbst, vor dem sie Angst hatten« (MEW 30, 429). In den folgenden Jahren kommt zu Kämpfen um seine Nachfolge als Vorsitzender des ADAV.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Ferdinand_Lassalle',
        linkText: 'Ferdinand Lassalle – Wikipedia',
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
    body: 'Die Erste Internationale, formal die Internationale Arbeiterassoziation (IAA), wird in London gegründet. Zu diesem Zeitpunkt schließen sich in ihr noch ganz unterschiedliche Strömungen zusammen. Der Hauptkonflikt um die politische Ausrichtung wird später zwischen Kommunisten um Karl Marx und Anarchisten um Michail Bakunin ausgetragen.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Internationale_Arbeiterassoziation',
        linkText: 'Internationale Arbeiterassoziation (IAA) – Wikipedia',
      },
      {
        href: 'http://mlwerke.de/me/me16/me16_005.htm',
        linkText: 'Karl Marx: Inauguraladresse der Internationalen Arbeiter-Assoziation – Volltext',
      },
      {
        href: 'http://mlwerke.de/me/me16/me16_014.htm',
        linkText: 'Karl Marx: Provisorische Statuten der Internationalen Arbeiter-Assoziation – Volltext',
      },
    ],
  },
  {
    id: '1867-kapital',
    categories: ['veröffentlichung'],
    color: 'red',
    faicon: 'book',
    date: '1867-09-14',
    title: 'Veröffentlichung des ersten Bands des Kapitals',
    body: 'Der erste Band von Karl Marx’ Hauptwerk Das Kapital erscheint. Marx gibt sich überzeugt von seinem Werk: »Es ist sicher das furchtbarste Missile, das den Bürgern (Grundeigentümer eingeschlossen) noch an den Kopf geschleudert worden ist« (MEW 31, 541)',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Das_Kapital',
        linkText: 'Das Kapital – Wikipedia',
      },
      {
        href: 'http://mlwerke.de/me/me23/me23_000.htm',
        linkText: 'Das Kapital – Volltext',
      },
    ],
  },
  {
    id: '1872-spaltung-erste-internationale',
    categories: ['kongress'],
    color: 'red',
    faicon: 'users',
    date: '1872-09-02',
    title: 'Spaltung der Ersten Internationale',
    body: 'Auf dem Haager Kongress der Ersten Internationale kommt es zur Spaltung zwischen Anhängern von Karl Marx und Anhängern von Michail Bakunin.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Internationale_Arbeiterassoziation#V._Kongress_(Den_Haag,_2.%E2%80%937._September_1872)',
        linkText: 'V. Kongress (Den Haag, 2.–7. September 1872) – Wikipedia',
      },
      {
        href: 'https://www.geschichte.fm/podcast/zs176/',
        linkText: 'Die Anfänge des Anarchismus und was Uhrmacher in der Schweiz damit zu tun haben – GAG176',
      },
    ],
    // TODO: Mehr über den Hergang und den Gegenkongress
  },
  {
    id: '1875-gothaer-parteitag',
    categories: ['kongress'],
    color: 'red',
    faicon: 'users',
    date: '1875-05-22',
    title: 'Gothaer Parteitag',
    body: 'Auf dem Gothaer Parteitag vereinigen sich ADAV und SDAP zur Sozialistischen Arbeiterpartei Deutschlands (SAP). Das Gothaer Programm wird verabschiedet. Marx hält nicht viel vom Text dieses Programms und verfasst seine berühmte Schrift Kritik des Gothaer Programms.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Gothaer_Programm',
        linkText: 'Gothaer Programm – Wikipedia',
      },
      {
        href: 'https://www.marxists.org/deutsch/geschichte/deutsch/spd/1875/gotha.htm',
        linkText: 'Das Gothaer Programm – Volltext',
      },
      {
        href: 'http://www.mlwerke.de/me/me19/me19_013.htm',
        linkText: 'Karl Marx: Kritik des Gothaer Programms – Volltext',
      },
      {
        href: 'https://wohlstandfueralle.podigee.io/209-kritik-des-gothaer-programms',
        linkText: 'Wieso Marx von Gleichheit und Gerechtigkeit wenig hielt – WfA209',
      }
    ],
    // TODO: Signifikanz Marxens Kritik
  },
  {
    id: '1878-sozialistengesetz',
    color: 'red',
    faicon: 'gavel',
    date: '1878-10-22',
    title: 'Inkrafttreten der Sozialistengesetze',
    body: 'Im Deutschen Reich tritt das »Gesetz gegen die gemeingefährlichen Bestrebungen der Sozialdemokratie« in Kraft. Es verbietet die sozialdemokratische Partei, ihre Organisationen und ihre Presse. Die Sozialdemokratie weicht in die Illegalität aus.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Sozialistengesetz',
        linkText: 'Sozialistengesetz – Wikipedia',
      },
    ],
    // TODO: Außerkrafttreten am 30. September 1890, Sozialdemokraten nur im Parlament legal
  },
  {
    id: '1883-tod-marx',
    color: 'red',
    faicon: 'cross',
    date: '1883-03-14',
    title: 'Tod von Karl Marx',
    body: 'Karl Marx stirbt in London.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Karl_Marx',
        linkText: 'Karl Marx – Wikipedia',
      },
      {
        href: 'http://www.mlwerke.de/me/me19/me19_335.htm',
        linkText: 'Engels’ Grabrede für Marx – Volltext',
      }
    ],
  },
  {
    id: '1886-haymarket-riot',
    categories: ['revolution'],
    color: 'red',
    faicon: 'fist-raised',
    date: '1886-05-01',
    title: 'Haymarket Riot',
    body: 'Am 1. Mai 1886 begann in Chicago ein mehrtägiger, von den Gewerkschaften organisierter Streik, um eine Reduzierung der täglichen Arbeitszeit von zwölf auf acht Stunden durchzusetzen. Bei einem Bombenanschlag auf die Polizei sterben sieben Polizisten und mindestens vier Demonstranten. Vier Anarchisten werden hingerichtet, obwohl ihre Schuld nie bewiesen werden konnte.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Haymarket_Riot',
        linkText: 'Haymarket Riot – Wikipedia',
      },
    ],
    // TODO: Text von Wikipedia, Bedeutung des 1. Mai als Kampftag der Arbeiterbewegung
  },
  {
    id: '1889-zweite-internationale',
    categories: ['kongress'],
    color: 'red',
    faicon: 'users',
    date: '1889-07-14',
    title: 'Gründung der Zweiten Internationale',
    body: 'Die Zweite Internationale wird in Paris gegründet. Sie wird von der Sozialdemokratie dominiert und ist bis zum Ausbruch des Ersten Weltkriegs die wichtigste internationale Organisation der Arbeiterbewegung.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Zweite_Internationale',
        linkText: 'Zweite Internationale – Wikipedia',
      },
      {
        href: 'https://de.wikipedia.org/wiki/Internationaler_Arbeiterkongress_(1889)',
        linkText: 'Internationaler Arbeiterkongress (1889) – Wikipedia',
      },
      {
        href: 'Protokoll des Internationalen Arbeiter-Congresses in Paris (1889)',
        linkText: 'Protokoll des Internationalen Arbeiter-Congresses in Paris (1889) – Volltext',
      },
    ],
    // TODO: 100. Jahrestag der Französischen Revolution, 1. Mai als Kampftag der Arbeiterbewegung ausgerufen, von Engels mit iniitiert
  },
  //  Am 1. Mai 1890 wurde dieser „Protest- und Gedenktag“ erstmalig mit Massenstreiks und Massendemonstrationen in der gesamten Welt begangen.
  {
    id: '1891-erfurter-parteitag',
    categories: ['kongress'],
    color: 'red',
    faicon: 'users',
    date: '1891-10-14',
    title: 'Erfurter Parteitag',
    body: 'Die Sozialistische Arbeiterpartei Deutschlands (SAP) wird in Erfurt zur Sozialdemokratischen Partei Deutschlands (SPD). Das Erfurter Programm wird verabschiedet.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Erfurter_Parteitag',
        linkText: 'Erfurter Parteitag – Wikipedia',
      },
      {
        href: 'https://www.marxists.org/deutsch/geschichte/deutsch/spd/1891/erfurt.htm',
        linkText: 'Das Erfurter Programm – Volltext',
      },
      {
        href: 'https://www.marxists.org/deutsch/archiv/kautsky/1892/erfurter/index.htm',
        linkText: 'Programmkommentar Karl Kautskys – Volltext',
      },
    ],
    // TODO: Mehr über den Inhalt des Erfurter Programms, Kontext: nach Aufhebung des Sozialistengesetzes
  },
  {
    id: '1895-tod-engels',
    color: 'red',
    faicon: 'cross',
    date: '1895-08-05',
    title: 'Tod von Friedrich Engels',
    body: 'Friedrich Engels stirbt in London.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Friedrich_Engels',
        linkText: 'Friedrich Engels – Wikipedia',
      },
    ],
  },
  {
    id: '1917-februarrevolution',
    categories: ['revolution'],
    color: 'red',
    faicon: 'fist-raised',
    date: '1917-03-08',
    title: 'Februarrevolution in Russland',
    body: 'Am 23. Februar (jul.) / 8. März 1917 (greg.) beginnt in Petrograd die Februarrevolution in Russland. Die Zarenherrschaft wird abgeschafft und durch die sog. Doppelherrschaft, einem Nebeneinander von Parlament (Duma) und Arbeiter- und Soldatenräten (Sowjets) ersetzt. Die Duma setzt eine provisorische Regierung zunächst unter Ministerpräsident Lwow und dann unter Kerenski ein.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Februarrevolution_1917',
        linkText: 'Februarrevolution 1917 – Wikipedia',
      },
    ],
  },
  {
    id: '1917-lenin-zug',
    color: 'red',
    faicon: 'train',
    date: '1917-04-09',
    title: 'Lenin beginnt seine Reise im plombierten Wagen',
    body: 'Lenin kehrt aus dem Schweizer Exil nach Russland zurück. Die deutsche Reichsregierung lässt ihn durch Deutschland reisen, um die russische Regierung zu destabilisieren. Am 16. April trifft er in Petrograd ein.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Reise_Lenins_im_plombierten_Wagen',
        linkText: 'Reise Lenins im plombierten Wagen – Wikipedia',
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
    body: 'In der Oktoberrevolution vom 25. Oktober (jul.) / 7. November 1917 (greg.) übernehmen die Bolschewiki unter Führung Lenins gewaltsam die Macht in Russland und beseitigen die Doppelherrschaft. Es folgt ein mehrjähriger Bürgerkrieg.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Oktoberrevolution',
        linkText: 'Oktoberrevolution – Wikipedia',
      },
      {
        href: 'https://de.wikipedia.org/wiki/Russischer_B%C3%BCrgerkrieg',
        linkText: 'Russischer Bürgerkrieg – Wikipedia',
      },
    ],
  },
  {
    id: '1919-mord-liebknecht-luxemburg',
    color: 'red',
    faicon: 'cross',
    date: '1919-01-15',
    title: 'Mord an Rosa Luxemburg und Karl Liebknecht',
    body: 'Rosa Luxemburg und Karl Liebknecht werden in Berlin von Freikorps-Soldaten ermordet.',
    links: [
      {
        href: 'https://de.wikipedia.org/wiki/Morde_an_Karl_Liebknecht_und_Rosa_Luxemburg',
        linkText: 'Morde an Karl Liebknecht und Rosa Luxemburg – Wikipedia',
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
