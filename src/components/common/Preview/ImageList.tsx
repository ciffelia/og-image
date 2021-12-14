export interface Props {
  imageSrc: string[];
  size: string;
}

const ImageList: React.VFC<Props> = ({ imageSrc, size }) => {
  const elms: React.ReactNode[] = imageSrc.flatMap((src, i) => [
    // eslint-disable-next-line @next/next/no-img-element
    <img key={`${i}-image`} src={src} alt="" style={{ height: '1em' }} />,
    <span
      key={`${i}-plus`}
      className="opacity-90"
      style={{ fontSize: '0.5em' }}
    >
      +
    </span>,
  ]);

  // remove last "+"
  elms.pop();

  return (
    <ul className="flex items-center" style={{ fontSize: size, gap: '0.25em' }}>
      {elms}
    </ul>
  );
};

export default ImageList;
