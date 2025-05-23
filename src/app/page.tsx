'use client';
import { helloWorldAction } from '@/actions/hello-world';

export default function Home() {
  async function handleSubmit(formData: any) {
    try {
      const result = await helloWorldAction(formData);
      console.log(`result===::`, result);
      alert(result.message);
    } catch (e) {
      console.log(`e === :::`, e);
    }
  }
  return (
    <div>
      <h1>Hi</h1>
      <form action={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="abc@gmail.com"
          required
        />
        <br />
        <button type="submit" style={{ backgroundColor: '#FFF' }}>
          Action
        </button>
      </form>
    </div>
  );
}
