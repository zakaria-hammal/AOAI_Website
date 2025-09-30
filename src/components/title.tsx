import Image from 'next/image';

export function Title() {
   return (
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
   ) 
}
