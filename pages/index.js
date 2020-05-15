import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import { renderBigButton, renderButton, renderCategory } from "../components/button";
export default function Home() {

    return (
    <section className={utilStyles.homepage} >
        <Head>
            <title>{"Home page"}</title>
        </Head>
        <section className={`${utilStyles.text} ${utilStyles.title}`}>
            {"Шинээр нэмэгдсэн"}
        </section>
        <section className={utilStyles.slider}>
            <section className={utilStyles.box}>
                {renderBigButton({props: "girafe.png", name: "Амьтад"})}
            </section>
        </section>

        <section className={utilStyles.categories}>
            {renderCategory()}
        </section>
    </section>
    )
  }