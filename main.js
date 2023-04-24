import getContactByEmail from "./utils/getContactByEmail";
import getUserById from "./utils/getUserById";
import showCalendarToDOM from "./utils/showCalenderToDOM";

const getCalendarURL = async () => {
  const url = new URL(location.href);

  const id = url.searchParams.get("id");

  if (!id) return;

  const contact = await getContactByEmail(id.trim().replaceAll(" ", ""));
  if (!contact) return;

  console.log(contact);

  const customFields = contact.customField;

  if (!customFields) return;

  const calendarLinkField = customFields.find((customField) => {
    return customField.id.trim() === "rdM4um58D7th4eLjjKx8";
  });

  if (!calendarLinkField) return;

  const calendarLink = calendarLinkField.value;

  const contactAssignedId = contact.assignedTo ? contact.assignedTo : "";

  const associatedUser = await getUserById(contactAssignedId);

  if (!associatedUser) return;

  const associatedUserName = associatedUser.name ? associatedUser.name : "";
  const associatedUserPhone = associatedUser.phone ? associatedUser.phone : "";

  const userProfile = {
    name: associatedUserName,
    phone: associatedUserPhone,
  };

  showCalendarToDOM(calendarLink, userProfile);
};

setTimeout(() => {
  getCalendarURL();
}, 5000);
