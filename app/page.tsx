import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await searchParams;
  
  return {
    openGraph: {
      title: 'Video',
      description: 'Video',
      url: params.url?.toString(),
      siteName: 'Video',
      images: [
        {
          url: 'https://ia.media-imdb.com/images/rock.jpg',
        },
      ],
      videos: [
        {
          url: params.url?.toString() || "",
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}
 
export default function Page({ searchParams }: Props) {
  return <>
    Usage: Append <i>?url=&lt;URL&gt;</i> to the end of this website's URL, where &lt;URL&gt; is replaced with a direct link to the video file of the video you want to embed. The new link as a whole, when shared to Discord, will turn into an embed with an attached video file.
  </>
}