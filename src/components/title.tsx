import Image from 'next/image';
import Head from 'next/head';

export function Title() {
   return (
   <>
   <Head>
   <title>Algerian Open AI - Advancing AI in Algeria</title>
      <meta name="description" content="Join Algerian Open AI community of AI researchers, developers and enthusiasts working to advance artificial intelligence in Algeria" />
      <meta name="keywords" content="AI Algeria, Algerian AI community, machine learning Algeria" />
      <meta property="og:title" content="Algerian Open AI" />
      <meta property="og:description" content="Advancing AI research and development in Algeria" />
      <meta property="og:image" content="/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
   </Head>
   <div className="title-container">
       <div className="logo-title-container">
           <div className="logo-above-title">
               <Image
                   src="/AOAI.png"
                   width={300}
                   height={100}
                   alt="AOAI Logo"
                   className="title-logo"
               />
           </div>
           <h1 className="page-title">
               The Algerian Olympiad in Artificial Intelligence
           </h1>
       </div>
   </div>   
   </>
   ) 
}
