'use server';
export const maxDuration = 35; // This function can run for a maximum of 35 seconds

const delay = async (delayInms: number) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};
export const helloWorldAction = async (email: any) => {
  console.log(`Action start executing`);
  let delayres = await delay(30 * 1000);

  console.log(`delayres==:::`, delayres);

  console.log(`Action wait time finishes`);
  // Simulate success
  return { message: `Email sent successfully to ${email}` };
  // Your logic to send an email
};
