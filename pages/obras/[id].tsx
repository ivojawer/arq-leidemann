import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

interface Props {
    content: { attributes: ObraAttributes };
  }
  interface ObraAttributes {
    title: string;
    image: string;
  }
  const ObraPage: NextPage<Props> = ({ content }) => {
    const { attributes } = content;
    return (
      <>
        <h1>{attributes.title}</h1>
        <img src={attributes.image} alt='image' />
      </>
    );
  };

  export const getStaticPaths: GetStaticPaths = async () => {
    const blogSlugs = ((context) => {
      const keys = context.keys()
      const data = keys.map((key: string, _index: any) => {
        let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
  
        return slug
      })
      return data
    })(await import(`../../content/${'obras'}`))
  
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