const agencyAPIKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiMW9yY29HT0RlZFhPd00xWVJHNVAiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE2ODAxMTQwMTY0MTcsInN1YiI6ImgwZmM1NUFNYWloWVBrS2FFNm04In0.9Urf8KGq7nKT9QXSAzL84n2_mcwJ17-ZLOyHRsGmlnE";
const userBaseURL = "https://rest.gohighlevel.com/v1/users/";

const getUserById = async (id) => {
  const header = new Headers();
  header.append("Authorization", `Bearer ${agencyAPIKEY}`);
  header.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: header,
    redirect: "follow",
  };

  try {
    const request = await fetch(`${userBaseURL}${id.trim()}`, requestOptions);
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};
export default getUserById;
