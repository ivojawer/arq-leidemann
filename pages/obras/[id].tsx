import { NextPage, GetStaticProps } from 'next';

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
  export const getStaticProps: GetStaticProps = async () => {
    const content = await import(`../content/pages/${'obras'}.md`);
    return { props: { content: content.default } };
  };
  export default ObraPage;