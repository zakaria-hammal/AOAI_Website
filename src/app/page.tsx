import { Nav } from "@/components/nav";
import { Events } from "@/components/events";
import { Courses } from "@/components/courses";
import { Coaches } from "@/components/coaches";
import { Sponsors } from "@/components/sponsors";
import { Hero } from "@/components/hero";

export default async function Home() {
  return (
    <>
    <Nav/>

    <section id="home">
        <Hero />
    </section>

    <section id="events">
        <Events />
    </section>

    <section id="courses">
        <Courses />
    </section>

    <section id="coaches">
        <Coaches />
    </section>

    <section id="sponsors">
        <Sponsors />
    </section>

    <div className="cta-section">
        <p>Your hard work matters. Let's build something amazing together!</p><br></br>
        <a href="/add" className="cta-button">Join Our Team</a>
    </div>
    </>
  )
}
