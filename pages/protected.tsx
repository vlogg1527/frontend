// pages/protected.tsx
import { getSession } from 'next-auth/react';

const ProtectedPage = () => {
  return <div>This is a protected page. You are logged in!</div>;
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default ProtectedPage;
