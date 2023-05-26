import Head from 'next/head'
import AboutMe from "@modules/component/about_me";

export default function Home() {
  return (
      <div className="current-theme">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Title</title>

        </Head>
          <div>
        <AboutMe/>
        </div>
      </div>
  )
}
