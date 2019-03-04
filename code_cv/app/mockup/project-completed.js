export default {
  title: 'project completed',
  tableInfo: {
    header: [
      {
        title: '#',
        width: 20,
      },
      {
        title: 'Project',
        width: 50,
      },
      {
        title: 'Special function',
        width: 100,
      },
      {
        title: 'Duty/Role Within Project',
        width: 100,
        textAlign: 'left',
      },
      {
        title: 'Url of Project',
        width: 100,
      },
    ],
    body: [
      {
        cells: ['1', '<b>Edetailing</b>', 'App Cordova',
          `
            <p><u>Job description</u> : Convert PSD file to <b>React</b>, fix bugs <b>cordova</b></p>
            <p><u>Technologies</u> : ReactJS, Cordova, Redux-saga</p>
          `,
          'Internal',
        ],
      },
      {
        cells: ['2', '<b>Emmar</b>', 'Web',
          `
            <p><u>Job description</u> : Convert PSD file to <b>HTML(pug)/SCSS</b></p>
            <p><u>Technologies</u> : Query, Javascript, HTML, SCSS</p>
          `,
          'Internal',
        ],
      },
      {
        cells: ['3', '<b>Yogaworks</b>', 'App ReactNative',
          `
            <p><u>Job description</u> : Build structure for project, read document, implement layout, integrate api</p>
            <p><u>Technologies</u> : ReactNative, Redux-saga</p>
          `,
          'Internal',
        ],
      },
      {
        cells: ['4', '<b>Aikibi</b>', 'Web',
          `
            <p><u>Job description</u> : Read document, Convert PSD file to HTML/CSS + JQuery, integrate data by PHP</p>
            <p><u>Technologies</u> : Query, Javascript, CSS, PHP</p>
          `,
          '<a href="http://aikibi.com.vn/">http://aikibi.com.vn/</a>',
        ],
      },
      {
        cells: ['4', '<b>Realworld</b>', 'Web' ,
          `
            <p><u>Job description</u> : Read document api, implement layout by <b>React</b></p>
            <p><u>Technologies</u> : React, Redux-saga</p>
          `,
          '<a href="http://react-app-pr.herokuapp.com/">http://react-app-pr.herokuapp.com/</a>',
        ],
      },
      {
        cells: ['5', '<b>Laava</b>', 'Web App' ,
          `
            <p><u>Job description</u> : Read document, research GrapJS, build structure for project, convert <b>Sketch</b> file to <b>React</b></p>
            <p><u>Technologies</u> : React, Redux, Grapesjs</p>
          `,
          'Internal',
        ],
      },
    ],
  },
};
