import type { GetServerSideProps, NextPage } from "next";
import { getSession, signIn } from "next-auth/react";

const Login: NextPage = () => {

  return <>
    <h1>Login</h1>
    <p>To acces the application you need to be registered</p>
    <button
      className="rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
      onClick={() => signIn(undefined, { callbackUrl: '/user' })}
    >
      Sign in/Log in
    </button>

  </>
}

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/user',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
}