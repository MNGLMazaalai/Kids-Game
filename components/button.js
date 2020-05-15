// import Head from 'next/head'
// import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
// import Button from '../components/button'
// import Link from 'next/link'
import list from '../data/category.json'

const images = "/images/categoryPictures/"

export function renderBigButton({props, name}) {
    const currentSrc = images + props
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
export function renderButton({props, name, color}) {
    const currentSrc = images + props
    return (
        <section className={utilStyles.normal} key={name}>
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
export function renderCategory() {
    let res = [], count = 0
    list.forEach(element => {
        res.push (
            <section className={utilStyles.line} key={count++}> 
                {
                    element.map(el => 
                        renderButton({props: el.photo, name: el.name, color: el.color})
                    )
                }
            </section>
        )
    })
    return res;
}