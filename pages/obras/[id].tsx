import { readdirSync } from 'fs';
import { NextPage, GetStaticPaths } from 'next';

interface Props {
    content: { attributes: ObraAttributes };
  }
  interface ObraAttributes {
    title: string;
    images: string[];
  }
  const ObraPage: NextPage<Props> = ({ content }) => {
    const { attributes } = content;
    return (
      <>
        <h1>{attributes.title}</h1>
        { attributes.images.map(image => <img src={image}/>) }
      </>
    );
  };

  export const getStaticPaths: GetStaticPaths = async () => {
    const directory = await readdirSync('./content/obras/')
    const blogSlugs = 
      directory.map(element => {
          return element.substring(0,element.length - 3)
      });
      
  
    const paths = blogSlugs.map((slug: any) => `/obras/${slug}`)
  
    return {
      paths,
      fallback: false,
    }
  
  }

  export async function getStaticProps({...ctx}) {
    const { id } = ctx.params
    const content = await import(`../../content/obras/${id}.md`);
    return { props: { content: content.default } };
  };
  export default ObraPage;