import Link from 'next/link';

const IconLink = ({ href, target, rel, Icon, style }) => {
  return (
    <Link className="icon-link mr-4 cursor-pointer w-7 h-7" href={href} target={target} rel={rel} passHref>
      <Icon className="w-full h-full fill-midnight dark:fill-white hover:opacity-80 dark:hover:fill-slate-400" style={style} />
    </Link>
  );
};

export default IconLink;