import { Nav } from "@/components/nav";
import { Events } from "@/components/events";
import { Courses } from "@/components/courses";
import { Coaches } from "@/components/coaches";
import { Sponsors } from "@/components/sponsors";
import { Hero } from "@/components/hero";
import { Title } from "@/components/title";

export default async function Home() {
  return (
    <>
    <Nav/>
    <main>
    <section>
        <Title />
    </section>
    <section id="home">
        <Hero />
    </section>

    <section id="events">
        <Events />
    </section>

    <section id="coaches">
        <Coaches />
    </section>

    <section id="sponsors">
        <Sponsors />
    </section>

    <div className="cta-section">
        <p>Your hard work matters. Let &apos s build something amazing together!</p><br></br>
        <a href="/add" className="cta-button">Join Our Team</a>
    </div>

    </main>

    </>
  )
}
