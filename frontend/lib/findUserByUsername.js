export const findUserByUsername = async (username) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/user/getUserByUsername?username=${username}`,
    );
    const data = await res.json();
    return data?.data[0].id;
  } catch (error) {
    console.log(error.message);
  }
};
