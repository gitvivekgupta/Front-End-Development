var hotSettings = {

  data: dataObject,
  columns: [
    {
      data: 'movie_title',
      type: 'text',
      width: 100
    },
    {
      data: 'director_name',
      type: 'text',
      width: 110
    },
    {
      data: 'actor_1_name',
      type: 'text',
      width: 110
    },
    {
      data: 'actor_2_name',
      type: 'text',
      width: 110
    },
    {
      data: 'genres',
      type: 'text',
      width: 130
    },
    {
      data: 'language',
      type: 'text',
      width: 80
    },
    {
      data: 'country',
      type: 'text',
      width: 80
    },
    {
      data: 'content_rating',
      type: 'text',
      width: 110
    },
    {
      data: 'budget',
      type: 'numeric',
      width: 90
    },
    {
      data: 'title_year',
      type: 'numeric',
      width: 80
    },
    {
      data: 'plot_keywords',
      type: 'text',
      width: 140
    },
    {
      data: 'movie_imdb_link',
      type: 'text',
      width: 150
    }
  ],
  width: 2000,
  autoWrapRow: true,
  height: 1000,
  maxRows: 1000,
  rowHeaders: true,
  colHeaders: [
    'movie_title',
    'director_name',
    'actor_1_name',
    'actor_2_name',
    'genres',
    'language',
    'country',
    'content_rating',
    'budget',
    'title_year',
    'plot_keywords',
    'movie_imdb_link'
  ],
  filters: true,
  dropdownMenu: true
};