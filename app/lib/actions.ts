//import { authenticate } from '@/app/lib/actions';
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { redirect } from 'next/navigation';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000', // Change this to your GraphQL server URL
  cache: new InMemoryCache(),
  headers: {
    authorization: typeof window !== 'undefined' ? localStorage.getItem('token') || '' : '',
  },
});

export async function authenticate(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const response = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: { email, password },
    });

    const { token } = response.data.login;

    // Log the token on the frontend
    console.log('Received Token on Frontend:', token);

    // Store token in localStorage
    localStorage.setItem('token', token);

    // Return success
    return { success: true, token };
  } catch (error) {
    console.error('Login failed:', error);
    return { success: false, error: 'Invalid credentials' };
  }
}
