import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
    return (
    <section>
        <Head>
            <title>{"Home page"}</title>
        </Head>
        <section className={utilStyles.text}>
            <h1>{"Шинээр нэмэгдсэн"}</h1>
        </section>
    </section>
    )
  }