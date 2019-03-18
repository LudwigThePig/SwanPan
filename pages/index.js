import Layout from '../lib/Layout'
import Link from 'next/link'

const PostLink = props => (
  <li>
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
  </li>
)

export default () => (
  <Layout>
    <p>Welcome to SwanPan</p>
    <ul>
    <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
)