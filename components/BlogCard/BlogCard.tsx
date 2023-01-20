import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { ArrowUpRight } from 'react-feather';

interface Props {
  children: React.ReactNode;
}

// TODO: Add Card Labels
// INFO: Sizes will be adjusted by the parent component

/**
 * @example
 *    <BlogCard>
         <BlogCard.Image src="https://picsum.photos/200/300" alt="Image" /> 
         <BlogCard.Info by='Ahmet Yilmaz' date='12.57.78' />
         <BlogCard.Title link={{ href: '/' }}>Card Title</BlogCard.Title>
         <BlogCard.Description>Card desc</BlogCard.Description>
      </BlogCard>;
 *  */

const BlogCard = ({ children }: Props) => {
  return <article className="flex flex-col gap-3">{children}</article>;
};

const Description = ({ children }: Props) => {
  return <p className="text-gray-500">{children}</p>;
};

const Img = ({ attr }: { attr: ImageProps }) => {
  return <Image {...attr} />;
};

const Info = ({ by, date }: { by: string; date: string }) => {
  return (
    <div className="text-sm font-semibold text-indigo-700">
      <span>{by}</span>
      <span className="mx-1">•</span>
      <span>{date}</span>
    </div>
  );
};

const Title = ({
  children,
  link
}: {
  children: ReactNode;
  link: LinkProps;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold text-gray-900">{children}</h3>
      <Link {...link}>
        <ArrowUpRight />
      </Link>
    </div>
  );
};

BlogCard.Image = Img;
BlogCard.Info = Info;
BlogCard.Title = Title;
BlogCard.Description = Description;

export default BlogCard;
