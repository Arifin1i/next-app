import RootLayout from "@/Components/Layout/RootLayouts";
import Head from "next/head";

const Home = () => {

  return (
    <div><Head>
      <title> Next Home Page </title>
      <meta name= "homepage" description= ""></meta>
    </Head><h1>This is my next.js home page</h1>
    </div>
  );
};
export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

