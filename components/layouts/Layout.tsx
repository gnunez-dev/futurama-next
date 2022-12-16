import Head from "next/head";
import { Navbar } from "../ui";

type LayoutProps = {
  children: React.ReactNode;
  title?: string,
  image?: string
}

export const Layout = ( {children, title, image}: LayoutProps ) => {
  return (
    <>
      <Head>
        <title>{ title ?? `Futurama App`}</title>
        <meta name="author" content="gnunez-dev" />
        <meta name="description" content={`Information about ${title}`} />
        <meta name="keywords" content="futurama" />
        
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={`Information about ${title}`}/>
        <meta property="og:image" content={image}/>
      </Head>

      <Navbar/>

      <main>
        { children }
      </main>

    </>
  )
}
