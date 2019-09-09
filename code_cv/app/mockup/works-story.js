export default {
  title: 'works story',
  listInfo: [],
  tableInfo: {
    header: [
      {
        title: '#',
        width: 20,
      },
      {
        title: 'Company Name',
        width: 50,
      },
      {
        title: 'Duration',
        width: 100,
      },
      {
        title: 'Year',
        width: 100,
      },
      {
        title: 'Position',
        width: 100,
      },
      {
        title: 'Notes',
        width: 100,
        textAlign: 'left',
      },
    ],
    body: [
      {
        cells: ['1', 'Nina', '2015 - 2017', '1.5 Year', 'Full Stack',
          `
          <p>- PHP, CSS, Jquery, JavaScript</p>
          <p>- Convert PSD to HTML</p>
          `,
        ],
      },
      {
        cells: ['2', 'Sutrix solution', '2017 - now', '2 Year', 'Front-end',
          `
          <p>- ReactJS (use Boilerplate Template, Cordova), ImmutableJS, Reselect, React Native, Redux, VueJS, Jquery, NodeJS (Express), Gulp, HTML(Pug), CSS (SCSS)</p>
          <p>- Convert PSD to HTML</p>
          `,
        ],
      },
    ],
  },
};
