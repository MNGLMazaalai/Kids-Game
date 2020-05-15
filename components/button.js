// import Head from 'next/head'
// import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
// import Button from '../components/button'
// import Link from 'next/link'

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
export function renderCategory({list}) {
    let res = []
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