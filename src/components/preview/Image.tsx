export interface Props {
  src: string;
  size: string;
}

const Image: React.VFC<Props> = ({ src, size }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt=""
    style={{
      height: '1em',
    }}
  />
);

export default Image;
