import UIfx from 'uifx'
import { useRouter } from "next/router";
// const postsDirectory = path.join(process.cwd(), '')

export default function Hello({ params }) {
  // const fileNames = fs.readdirSync(postsDirectory)
  const router = useRouter()
  const name = router.query.level
  const mp3file = `../../public/audios/${name}/${name}1`
  const sound = new UIfx(mp3file)

  return <div> onclick={sound.play} {name} </div>;
}
