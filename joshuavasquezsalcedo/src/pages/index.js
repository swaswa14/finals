import Head from 'next/head'
import AboutMe from "@modules/component/about_me";
import Body from "@modules/component/body";

export default function Home() {
  return (
      <div className="current-theme">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>About me</title>

        </Head>
          <div className="container mt-5">
        <AboutMe/>
              <Body/>
        </div>
      </div>
  )
}
