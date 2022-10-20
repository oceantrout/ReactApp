// const getRandomUser = () => {
//   fetch("https://randomuser.me/api/?results=5&gender=female")
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//     });
// };

// getRandomUser();

//async/wait
const getRandomUser2 = async () => {
  let response = await fetch(
    "https://randomuser.me/api/?results=5&gender=female"
  );
  let json = await response.json();
  console.log(json);
};

getRandomUser2();
