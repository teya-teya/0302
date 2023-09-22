const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=80",
  about: "Тут я рассказываю о себе и своих увлечениях...",
};

// const users = {
//   0: {
//     id: 5,
//     name: "Феодора",
//     lastname: "Лидова",
//     email: "feoli@ok.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//   },
//   1: {
//     id: 43,
//     name: "Прокофий",
//     lastname: "Елисеев",
//     email: "elipro@gmail.com",
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//   },
//   2: {
//     id: 12,
//     name: "Жанна",
//     lastname: "Аминьева",
//     email: "zhanna@bk.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//   },
//   3: {
//     id: 2,
//     name: "Никифор",
//     lastname: "Ирменов",
//     email: "irnem@ya.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//   },
//   4: {
//     id: 34,
//     name: "Искра",
//     lastname: "Любомирова",
//     email: "iskralm@MediaList.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//   },
// };
let users = [];

export function getUser(userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let respons = await fetch("https://teya-teya.lh1.in/getUsers");
  users = await respons.json();
  //console.log(users);
  return users;
}