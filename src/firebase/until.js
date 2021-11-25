import firebase from "./firebaseConfig";
const answers = [
  {
    _id: "619ef155b253fe455a4a0d5d",
    question: "619e72a88e0eab24ec78a2d0",
    text: "1985",
    is_correct: 1,
  },
  {
    _id: "619ef173b253fe455a4a0d5f",
    question: "619e72a88e0eab24ec78a2d0",
    text: "1986",
    is_correct: 1,
  },
  {
    _id: "619ef177b253fe455a4a0d61",
    question: "619e72a88e0eab24ec78a2d0",
    text: "1987",
    is_correct: 1,
  },
  {
    _id: "619ef17ab253fe455a4a0d63",
    question: "619e72a88e0eab24ec78a2d0",
    text: "1988",
    is_correct: 1,
  },
];

const database = firebase.database();

export const initData = async () => {
  const ref = database.ref("/test/answers");
  answers.forEach((answer) => {
    ref.push(answer);
  });
  console.log("Upload data complete");
};

export const getAllData = async () => {
  await database
    .ref("/test/users")
    .limitToLast(1)
    .on("child_added", (snapShot) => {
      console.log(snapShot.val(), "alooooo");
    });
};

export const uploadData = async (user) => {
  const ref = database.ref("/test/users");
  ref.child(Date.now()).set(user);
};
