export const findProjectByName = async (projectname) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/project/getProjectByName?projectname=${projectname}`,
    );
    const data = await res.json();
    return data?.data[0].id;
  } catch (error) {
    console.log(error.message);
  }
};
