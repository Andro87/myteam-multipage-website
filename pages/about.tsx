import Head from "next/head";
import styles from "../styles/about.module.scss";
import Header from "../components/header";
import Start from "../components/start";
import Footer from "../components/footer";
import Director from "../components/director";
import { useState } from "react";
export default function About() {
    const [mobile, setMobile] = useState(false);
    return (
        <div
            className={`${styles.main_wrap} ${
                mobile ? styles.menu_open : null
            }`}
        >
            <Head>
                <title>
                    Frontend Mentor | myteam website challenge - About
                </title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/favicon-32x32.png" />
            </Head>
            <Header onMobile={() => setMobile(!mobile)} />
            <main className={styles.main}>
                <div className={styles.main_container}>
                    <h1>About</h1>
                    <div className={styles.main_info}>
                        <p>
                            We help companies build dynamic teams made up of top
                            global talent. Using our network of passionate
                            professionals we drive innovation and deliver
                            incredible outcomes. Talented, diverse teams shape
                            the best products and experiences. We’ll bring those
                            teams to you.
                        </p>
                    </div>
                </div>
            </main>
            <section
                className={styles.section_directors}
                aria-label="directors"
            >
                <div className={styles.directors_container}>
                    <h2> Meet the directors</h2>
                    <div className={styles.directors}>
                        <Director
                            picture={
                                <img
                                    src="/images/avatar-nikita.jpg"
                                    alt="director"
                                />
                            }
                            header="Nikita Marks"
                            position="Founder & CEO"
                            name="Nikita Marks"
                            paragraph="“It always amazes me how much talent there is in every corner of the globe.”"
                        />

                        <Director
                            picture={
                                <img
                                    src="/images/avatar-christian.jpg"
                                    alt="director"
                                />
                            }
                            header="Cristian Duncan"
                            position="Co-founder & COO"
                            name="Cristian Duncan"
                            paragraph="
                            “Distributed teams required unique processes. You need to approach work in a new way.”"
                        />

                        <Director
                            picture={
                                <img
                                    src="/images/avatar-cruz.jpg"
                                    alt="director"
                                />
                            }
                            header="Cruz Hamer"
                            position="Co-founder & CTO"
                            name="Cruz Hamer"
                            paragraph="
                            “Technology is at the forefront of enabling distributed teams. That's where we come in.”"
                        />

                        <Director
                            picture={
                                <img
                                    src="/images/avatar-drake.jpg"
                                    alt="director"
                                />
                            }
                            header="Drake Heaton"
                            position="Business Development Lead"
                            name="Drake Heaton"
                            paragraph="
                            “Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”"
                        />

                        <Director
                            picture={
                                <img
                                    src="/images/avatar-griffin.jpg"
                                    alt="director"
                                />
                            }
                            header="Griffin Wise"
                            position="Lead Marketing"
                            name="Griffin Wise"
                            paragraph="
                            “Unique perspectives shape unique products, which is what you need to survive these days.”"
                        />

                        <Director
                            picture={
                                <img
                                    src="/images/avatar-aden.jpg"
                                    alt="director"
                                />
                            }
                            header="Aden Allan"
                            position="Head of Talent"
                            name="Aden Allan"
                            paragraph="
                            “Empowered teams create truly amazing products. Set the north star and let them follow it.”"
                        />
                    </div>
                </div>
            </section>
            <section className={styles.section_clients} aria-label="clients">
                <h2>Some of our clients</h2>
                <div className={styles.clients_container}>
                    <img src="/images/logo-the-verge.png" alt="the verge" />

                    <img
                        src="/images/logo-jakarta-post.png"
                        alt="jakarta post"
                    />
                    <img
                        src="/images/logo-the-guardian.png"
                        alt="the guardian"
                    />

                    <img src="/images/logo-tech-radar.png" alt="tech radar" />

                    <img src="/images/logo-gadgets-now.png" alt="gadgets" />
                </div>
            </section>

            <Start />
            <Footer />
        </div>
    );
}
