import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const name = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([name, photo]).then((vals) => {
    const response = [];
    vals.forEach((data) => {
      if (data.status === 'fulfilled') {
        response.push({ status: data.status, value: data.value });
      } else {
        response.push({
          status: data.status,
          value: `Error: ${data.reason.message}`,
        });
      }
    });
    return response;
  });
}