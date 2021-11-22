import tailwind from '../../tailwind.config'
import packageJson from '../../package.json'

const color: string = tailwind.theme.extend.colors.primary[600]

const app: string = process.env.APP_NAME || 'Bookshelves'
const author: string = process.env.APP_AUTHOR || 'Bookshelves Team'
const description: string =
  process.env.META_DESCRIPTION ||
  'For people with eReaders, download eBooks and reading in complete tranquility, your digital library that goes everywhere with you.'
const license: string = packageJson.license

const twitterLink: string | null = process.env.META_TWITTER_SITE
  ? process.env.META_TWITTER_SITE.replace('@', '')
  : null

const metadata = {
  settings: {
    robots: process.env.META_ROBOT || 'index, follow',
    disallow: '',
    color,
    locale: 'en_US',
    lang: 'en',
    googleToken: process.env.GOOGLE_SITE_VERIFICATION_TOKEN || null,
  },
  website: {
    title: 'Bookshelves',
    titleTemplate: `%s · ${app}`,
    description,
    rating: 'general',
    keywords: ['epub', 'book', 'ebook'],
    author,
    publisher: app,
    copyright: license,
    language: 'english',
    designer: author,
  },
  og: {
    type: 'website',
    siteName: app,
  },
  twitter: {
    creator: process.env.META_TWITTER_CREATOR || null,
    site: process.env.META_TWITTER_SITE || null,
    url: process.env.META_TWITTER_SITE
      ? `https://twitter.com/${twitterLink}`
      : null,
  },
}

export default metadata
