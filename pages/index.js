import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Button from '../components/button'

const images = "/images/categoryPictures/";
function renderBigButton({props, name}) {
    const currentSrc = images + props;
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
                <section className={utilStyles.text}>{name}</section>
            </section>
        </section>
    );
}
function renderButton({props, name, color}) {
    const currentSrc = images + props;
    return (
        <section className={utilStyles.normal} >
            <section className={utilStyles.box1}>
                <section className={utilStyles.space1}/>
                <section className={utilStyles.button} style={{backgroundColor: color}}/>
            </section>
            <section className={utilStyles.box1}>
                <section className={utilStyles.imagebox1}>
                    <img
                    className={utilStyles.image}
                    src={currentSrc}
                    />
                </section>
                <section className={utilStyles.text}>{name}</section>
            </section>
        </section>
    );
}
function renderCategory({list}) {
    let res = [];
    list.forEach(element => {
        res.push (
            <section className={utilStyles.line}>  
                {renderButton({props: element[0][0], name: element[0][1], color: element[0][2]})}
                {renderButton({props: element[1][0], name: element[1][1], color: element[1][2]})}
            </section>
        )
    })
    return res;
}
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