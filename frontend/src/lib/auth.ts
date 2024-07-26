'use server'

export async function signUp(formData: any) {
  try {
    const response = await fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const _data = await response.json();
    return "signed up successfully"
  } catch (error) {
    console.error('Error during sign up:', error);
  }
}
