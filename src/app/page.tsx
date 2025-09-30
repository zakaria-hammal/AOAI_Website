import { Nav } from "@/components/nav";
import { Events } from "@/components/events";
import { Coaches } from "@/components/coaches";
import { Sponsors } from "@/components/sponsors";
import { Ambassadors } from "@/components/ambassadors";
import { Hero } from "@/components/hero";
import { Title } from "@/components/title";
import { Footer } from "@/components/footer";

export default async function Home() {
  return (
    <>
      <Nav />
      <main>
        <Title />
        <section id="about">
          <Hero />
        </section>

        <section id="events">
          <Events />
        </section>

        <section id="coaches">
          <Coaches />
        </section>

        <section id="ambassadors">
          <Ambassadors />
        </section>

        <section id="sponsors">
          <Sponsors />
        </section>

        <Footer />
      </main>
    </>
  );
}
