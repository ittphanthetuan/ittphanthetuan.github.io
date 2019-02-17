import worksStory from "./works-story";
import education from "./education";
import whyYouHireMe from "./why-you-hire-me";
import languageSkills from "./language-skills";
import myStrengthsSkills from "./my-strengths-skills";
import professionalSkills from "./professional-skills";
import projectCompleted from "./project-completed";

export default {
  titleHeader: 'CURRICULUM VITAE',
  info: {
    // name: 'Phan Thế Tuấn',
    // position: 'Javascript Developer',
    listInfo: [
      {
        label: 'Full Name',
        text: 'Phan Thế Tuấn',
      },
      {
        label: 'Position',
        text: 'Javascript Developer',
      },
      {
        label: 'Date of birth',
        text: 'January 11nd, 1992',
      },
      {
        label: 'Department',
        text: 'Front-end',
      },
      {
        label: 'Gender',
        text: 'Male',
      },
      {
        label: 'Marital status',
        text: 'Single',
      },
      {
        label: 'Phone',
        text: '0976 77 22 35',
      },
      {
        label: 'Email',
        text: 'ittphanthetuan@gmail.com',
      },
    ],
  },
  categories: [
    languageSkills,
    myStrengthsSkills,
    whyYouHireMe,
    education,
    worksStory,
    professionalSkills,
    projectCompleted,
  ],
};
