// import fs from 'fs'
import { useRouter } from "next/router";
// const postsDirectory = path.join(process.cwd(), '')

export default function Hello({ params }) {
  // const fileNames = fs.readdirSync(postsDirectory)
  const router = useRouter();
  console.log(router.query.level);

  return <div> {params} </div>;
}
