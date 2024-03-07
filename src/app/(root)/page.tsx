import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  //save user to mongoDB
  const user = await currentUser();

  if (user) {
    const response = await fetch('http://localhost:8080/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: user.firstName + ' ' + user.lastName,
        email: user.emailAddresses[0].emailAddress,
        // phone: user.primaryPhoneNumberId
      }),
    });

    const data = await response.json();

    if (typeof window !== 'undefined') {
      if (response.status === 200) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...user,
            userid: data._id,
          })
        );
      } else {
        return Promise.reject();
      }
    }
  }

  return <main></main>;
}
