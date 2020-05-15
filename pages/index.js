import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { renderBigButton, renderButton, renderCategory } from "../components/button";
import Link from 'next/link'
import Button from '../components/button'

export default function Home() {
    const list = [
        [
            ["body.png", "Хүний бие эрхтэн", "#FFE6FF"],
            ["rainbow.png", "Өнгөнүүд", "#B6E0B1"],
        ],
        [
            ["nature.png", "Байгаль", "#E6E8FF"],
            ["apple.png", "Жимс", "#FFEDE6"],
        ],
        [
            ["food.png", "Хоол", "#A7E5E5"],
            ["bus.png", "Тээврийн хэрэгсэл", "#C5EBB4"],
        ],
        [
            ["flags.png", "Туг далбаа", "#FFE88F"],
            ["planets.png", "Од гараг", "#FFEDE6"],
        ],
        [
            ["job.png", "Мэргэжил", "#40E6BE"],
            ["family.png", "Гэр бүл", "#FFB28F"],
        ],
        [
            ["numbers.png", "Тоо", "#E6E8FF"],
            ["veggies.png", "Хүнсний ногоо", "#FFE6FF"],
        ]
    ];
    return (
    <section className={utilStyles.homepage}>
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
            {renderCategory({list: list})}
        </section>
    </section>
    )
  }