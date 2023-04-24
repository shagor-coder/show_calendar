const locationApiKey = "71bea5e6-64e9-4294-b56b-4b1008fcc4e8";
const baseURL = "https://rest.gohighlevel.com/v1/contacts/";

const getContactByEmail = async (id) => {
  const header = new Headers();
  header.append("Authorization", `Bearer ${locationApiKey}`);
  header.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: header,
    redirect: "follow",
  };

  try {
    const request = await fetch(`${baseURL}${id.trim()}`, requestOptions);
    const response = await request.json();
    const contact = await response.contact;
    return contact;
  } catch (err) {
    console.log(err);
  }
};

export default getContactByEmail;
