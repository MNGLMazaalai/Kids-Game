import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { renderBigButton, renderButton, renderCategory } from "../components/button";
import Link from 'next/link'
import Button from '../components/button'
import link from '../data/category.json'
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
            {/* {renderCategory({list: list})} */}
            {renderCategory()}
        </section>
    </section>
    )
  }