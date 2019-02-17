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
          '<p>- PHP, CSS, Jquery, JavaScript</p>',
        ],
      },
      {
        cells: ['2', 'Sutrix solution', '2017 - now', '1.5 Year', 'Full Stack',
          `
          <p>- Coding jQuery plugins for the projects.</p>
          <p>- Doing layout HTML/CSS for the web responsive.</p>
          <p>- Supporting JS and HTML/CSS</p>
          <p>- ReactJS, React Native, Redux, VueJS, Jquery, Gulp, HTML(Pug), CSS (SCSS)</p>
          `,
        ],
      },
    ],
  },
};
