import getCalendlyURL from './utils/getCalendlyURL';
import getContactByEmail from './utils/getContactByEmail';
import getUserById from './utils/getUserById';
import showCalendarToDOM from './utils/showCalenderToDOM';

const getCalendarURL = async () => {
	const url = new URL(location.href);

	const id = url.searchParams.get('id');

	if (!id) return;

	const contact = await getContactByEmail(id.trim().replaceAll(' ', ''));
	if (!contact) return;

	console.log(contact);

	const contactAssignedId = contact.assignedTo ? contact.assignedTo : '';

	const associatedUser = await getUserById(contactAssignedId);

	if (!associatedUser) return;

	const userCustomField = await getCalendlyURL(associatedUser.email);

	console.log(userCustomField);

	if (!userCustomField.value) return;

	const calendarLink = userCustomField.value.trim();

	const associatedUserName = associatedUser.name ? associatedUser.name : '';
	const associatedUserPhone = associatedUser.phone ? associatedUser.phone : '';

	const userProfile = {
		name: associatedUserName,
		phone: associatedUserPhone,
		contact_name: contact.firstName,
	};

	showCalendarToDOM(calendarLink, userProfile);
};

setTimeout(() => {
	getCalendarURL();
}, 5000);
