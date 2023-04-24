import replaceInnerText from "./replaceInnerText";

const showCalendarToDOM = (calendarURL, userInfo) => {
  const calendarContainer = document.querySelector("#calendar_embed");
  if (!calendarContainer) return;

  calendarContainer.innerHTML = `
    <iframe src="${calendarURL}" style="height:100%;width: 100%;border:none;overflow: auto;" scrolling="no"></iframe>
  `;

  const userInfoElement = document.querySelectorAll(".userInfo");
  if (!userInfo) return;
  replaceInnerText(userInfoElement, userInfo, "user.");
};

export default showCalendarToDOM;
