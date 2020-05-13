import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Button from '../components/button'

export default function Home() {
    return (
    <section className={utilStyles.homepage}>
        <Head>
            <title>{"Home page"}</title>
        </Head>
        <section className={`${utilStyles.text} ${utilStyles.title}`}>
            {"Шинээр нэмэгдсэн"}
        </section>
        <section className={utilStyles.slider}>
            <section className={utilStyles.new}>
                <img
                className={utilStyles.image}
                src="/images/categoryPictures/girafe.png"
                />
                <section className={utilStyles.text}>
                    Амьтад
                </section>
            </section>
        </section>
    </section>
    )
  }