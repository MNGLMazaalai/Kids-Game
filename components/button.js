// import Head from 'next/head'
import Link from 'next/link'
import list from '../data/category.json'
import newList from '../data/newCategory.json'
import utilStyles from '../styles/utils.module.scss'

const images = "/images/categoryPictures/"

export function renderNewButton({props, name, color}) {
  const currentSrc = images + props
  return (
    <section className={utilStyles.new} key={name}>
      <section className={utilStyles.newBox}>
        <section className={utilStyles.space}/>
        <section className={utilStyles.newButton} style={{backgroundColor: color}}/>
      </section>
      <section className={utilStyles.newBox}>
        <section className={utilStyles.imagebox}>
          <img
          className={utilStyles.newImage}
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
  const id = props.replace(/\.png$/, '')
  let count = 0;
  return (
    <Link href="./levels/level" as={`./levels/${id}`} key={currentSrc} passHref>
      <section className={utilStyles.normal} key={name}>
        <section className={utilStyles.box}>
          <section className={utilStyles.newSpace}/>
          <section className={utilStyles.button} style={{backgroundColor: color}}/>
        </section>
        <section className={utilStyles.box}>
          <section className={utilStyles.newImagebox}>
            <img
            className={utilStyles.image}
            src={currentSrc}
            />
          </section>
          <section className={utilStyles.text}>{name}</section>
        </section>
      </section>
    </Link>
  );
}
export function renderCategory() {
  let res = [], count = 0
  list.forEach(element => {
    res.push (
      <section className={utilStyles.line} key={count++}> 
        {element.map(el => renderButton({props: el.photo, name: el.name, color: el.color}))}
      </section>
    )
  })
  return res;
}
export function renderSlider() {
  let res = []
  newList.forEach(el => {
    res.push(renderNewButton({props: el.photo, name: el.name, color: el.color}))
  })
  return res;
}