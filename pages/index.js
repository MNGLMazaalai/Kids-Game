import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Button from '../components/button'

const images = "/images/categoryPictures/";
function renderBigButton({pro}) {
    const currentSrc = images + pro;
    return (
        <section className={utilStyles.new}>
            <section className={utilStyles.box}>
                <section className={utilStyles.space}/>
                <section className={utilStyles.newbutton}/>
            </section>
            <section className={utilStyles.box}>
                <section className={utilStyles.imagebox}>
                    <img
                    className={utilStyles.bigimage}
                    src={currentSrc}
                    />
                </section>
                <section className={utilStyles.text}>Амьтад</section>
            </section>
        </section>
    );
}
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
            {renderBigButton({pro: "girafe.png"})}
        </section>
        <section className={utilStyles.categories}>
            <section className={utilStyles.line}>
                
            </section>
        </section>
    </section>
    )
  }