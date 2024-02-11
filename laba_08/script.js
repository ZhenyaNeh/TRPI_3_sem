//1.
console.log('1-st Task')
let user = {
  name: 'Masha',
  age: 21
};

let copy1 = { ...user };
user.age = 100;
console.log('Исходный объект: ' + user.age);
console.log('Итоговый объект: ' + copy1.age + '\n');


//2.
console.log('2-st Task')
let numbers = [1, 2, 3];

let copy2 = [...numbers];
numbers[0] = 100;
console.log('Исходный объект: ' + numbers[0]);
console.log('Итоговый объект: ' + copy2[0] + '\n');


//3.
console.log('3-st Task')
let user1 = {
  name: 'Masha',
  age: 23,
  location: {
    city: 'Minsk',
    country: 'Belarus'
  }
};

let copy3 = {
  ...user1,
  location: {
    ...user1.location
  }
};

user1.location.city = 'Brest'
console.log('Исходный объект: ' + user1.location.city);
console.log('Итоговый объект: ' + copy3.location.city + '\n');


//4.
console.log('4-st Task')
let user2 = {
  name: 'Masha',
  age: 28,
  skills: ["HTML", "CSS", "JavaScript", "React"]
};

let copy4 = {
  ...user2,
  skills: [...user2.skills]
};

user2.skills[0] = 'C#';
console.log('Исходный объект: ' + user2.skills[0]);
console.log('Итоговый объект: ' + copy4.skills[0] + '\n');


//5.
console.log('5-st Task')
const array = [
  { id: 1, name: 'Vasya', group: 10 },
  { id: 2, name: 'Ivan', group: 11 },
  { id: 3, name: 'Masha', group: 12 },
  { id: 4, name: 'Petya', group: 10 },
  { id: 5, name: 'Kira', group: 11 },
]

let copy5 = [...array.map(x => ({ ...x }))]

array[0].name = 'Eugene'
console.log('Исходный объект: ' + array[0].name);
console.log('Итоговый объект: ' + copy5[0].name + '\n');


//6.
console.log('6-st Task')
let user4 = {
  name: 'Masha',
  age: 19,
  studies: {
    university: 'BSTU',
    speciality: 'designer',
    year: 2020,
    exams: {
      maths: true,
      programming: false
    }
  }
};

let copy6 = {
  ...user4,
  studies: {
    ...user4.studies,
    exams: {
      ...user4.studies.exams
    }
  }
};

user4.studies.exams.programming = true;
console.log('Исходный объект: ' + user4.studies.exams.programming);
console.log('Итоговый объект: ' + copy6.studies.exams.programming + '\n');


//7.
console.log('7-st Task')
let user5 = {
  name: 'Masha',
  age: 22,
  studies: {
    university: 'BSTU',
    speciality: 'designer',
    year: 2020,
    department: {
      faculty: 'FIT',
      group: 10,
    },
    exams: [
      { maths: true, mark: 8 },
      { programming: true, mark: 4 },
    ]
  }
};

let copy7 = {
  ...user5,
  studies: {
    ...user5.studies,
    department: {
      ...user5.studies.department
    },
    exams: user5.studies.exams.map(exam => ({ ...exam }))
  }
};

user5.studies.department.group = 1;
console.log('Исходный объект: ' + user5.studies.department.group);
console.log('Итоговый объект: ' + copy7.studies.department.group + '\n');
//!!!TASK2!!!
copy7.studies.department.group = 12;
copy7.studies.exams[1].mark = 10;
console.log('Второе задание: grop = ' + copy7.studies.department.group + '; mark = ' + copy7.studies.exams[1].mark + '\n')


//8.
console.log('8-st Task')
let user6 = {
  name: 'Masha',
  age: 21,
  studies: {
    university: 'BSTU',
    speciality: 'designer',
    year: 2020,
    department: {
      faculty: 'FIT',
      group: 10,
    },
    exams: [
      {
        maths: true,
        mark: 8,
        professor: {
          name: 'Ivan Ivanov ',
          degree: 'PhD'
        }
      },
      {
        programming: true,
        mark: 10,
        professor: {
          name: 'Petr Petrov',
          degree: 'PhD'
        }
      },
    ]
  }
};

let copy8 = {
  ...user6,
  studies: {
    ...user6.studies,
    department: {
      ...user6.studies.department
    },
    exams: [
      {
        ...user6.studies.exams[0],
        professor:{
          ...user6.studies.exams[0].professor
        }
      },
      {
        ...user6.studies.exams[1],
        professor:{
          ...user6.studies.exams[1].professor
        }
      }
    ]
    
    
    // user6.studies.exams.map(exam => ({
    //   ...exam,
    //   professor: { ...exam.professor }
    // }))
  }
};

user6.studies.exams[0].professor.degree = 'PhDDP';
console.log('Исходный объект: ' + user6.studies.exams[0].professor.degree);
console.log('Итоговый объект: ' + copy8.studies.exams[0].professor.degree + '\n');

copy8.studies.exams[0].professor.name = 'Eugene';
console.log('Третье задание: name = ' + copy8.studies.exams[0].professor.name + '\n');

//9.
console.log('9-st Task')
let user7 = {
  name: 'Masha',
  age: 20,
  studies: {
    university: 'BSTU',
    speciality: 'designer',
    year: 2020,
    department: {
      faculty: 'FIT',
      group: 10,
    },
    exams: [
      {
        maths: true,
        mark: 8,
        professor: {
          name: 'Ivan Petrov',
          degree: 'PhD',
          articles: [
            { title: "About HTML", pagesNumber: 3 },
            { title: "About CSS", pagesNumber: 5 },
            { title: "About JavaScript", pagesNumber: 1 },
          ]
        }
      },
      {
        programming: true,
        mark: 10,
        professor: {
          name: 'Petr Ivanov',
          degree: 'PhD',
          articles: [
            { title: "About HTML", pagesNumber: 3 },
            { title: "About CSS", pagesNumber: 5 },
            { title: "About JavaScript", pagesNumber: 1 },
          ]
        }
      },
    ]
  }
};

let copy9 = {
  ...user7,
  studies: {
    ...user7.studies,
    department: {
      ...user7.studies.department
    },
    exams: user7.studies.exams.map(exam => ({
      ...exam,
      professor: {
        ...exam.professor,
        articles: exam.professor.articles.map(art =>({...art}))
      }
    }))
  }
};

user7.studies.exams[0].professor.articles[0].title = 'About C#'
console.log('Исходный объект: ' + user7.studies.exams[0].professor.articles[0].title);
console.log('Итоговый объект: ' + copy9.studies.exams[0].professor.articles[0].title + '\n');

copy9.studies.exams[1].professor.articles[1].pagesNumber = 3
console.log('Четвертое задание: pagesNumber = ' + copy9.studies.exams[1].professor.articles[1].pagesNumber + '\n')


//10.
console.log('10-st Task')
let store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', linkesCount: 12 },
        { id: 2, message: 'By', linkesCount: 1 },
      ],
      newPostText: 'About me',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Valera' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Viktor' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi Hi' },
        { id: 3, message: 'Hi Hi Hi' },
      ],
    },
    sidebar: [],
  }
}

let copy10 = {
  ...store,
  state: {
    ...store.state,
    profilePage: {
      ...store.state.profilePage,
      posts: store.state.profilePage.posts.map(pos =>({...pos})),
    },
    dialogsPage: {
      ...store.state.dialogsPage,
      dialogs: store.state.dialogsPage.dialogs.map(dial => ({...dial})),
      messages: store.state.dialogsPage.messages.map(mess => ({...mess})),
    },
  },
};

store.state.dialogsPage.dialogs[0].name = 'Eugene';
console.log('Исходный объект: ' + store.state.dialogsPage.dialogs[0].name);
console.log('Итоговый объект: ' + copy10.state.dialogsPage.dialogs[0].name + '\n');


store.state.dialogsPage.messages = store.state.dialogsPage.messages.map((messages) =>{ return {...messages, message:  "Hello" }})
for(let mess of store.state.dialogsPage.messages)
  console.log(mess.message)

for(let mess of copy10.state.dialogsPage.messages)
  console.log(mess.message)