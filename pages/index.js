import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import { renderSlider, renderCategory } from "../components/button";
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
            <section className={utilStyles.newBox}>
                {renderSlider()}
            </section>
        </section>

        <section className={utilStyles.categories}>
            {renderCategory()}
        </section>
    </section>
    )
  }