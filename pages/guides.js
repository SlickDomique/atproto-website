import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import PreviewWarning from '../components/preview-warning'
import Sidebar from '../components/sidebar'
import Breadcrumbs from '../components/breadcrumbs'
import ContentGrid from '../components/content-grid'
import { getNavigationWithDesc } from '../lib/content'

export async function getStaticProps(context) {
  const navigation = await getNavigationWithDesc('guides', '/guides')
  return { props: { navigation } }
}

export default function Guides({ navigation }) {
  const pages = [{ name: 'Guides', href: '/guides', current: true }]
  return (
    <div>
      <Head>
        <title>Guides | at:// protocol</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="max-w-4xl mx-auto my-4 px-4 lg:px-0">
        <PreviewWarning rounded />
      </div>
      <div className="flex max-w-4xl mx-auto">
        <Sidebar navigation={navigation} />
        <div className="flex-1 px-4 pt-4">
          <div className="pb-5">
            <Breadcrumbs pages={pages} />
          </div>
          <ContentGrid
            pages={navigation.filter((page) => page.href !== '/guides')}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
