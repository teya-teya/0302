const user = {
  id: "1",
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=80",
  about: "Тут я рассказываю о себе и своих увлечениях...",
};

const users = {
  0: { name: "Феодорова", lastname: "Лидова" },
  1: { name: "Прокофий", lastname: "Елисеев" },
  2: { name: "Жанна", lastname: "Аминьева" },
  3: { name: "Никифор", lastname: "Ирменов" },
  4: { name: "Искра", lastname: "Любомирова" },
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}