export interface Props {
  message: string;
}

const Preview: React.VFC<Props> = ({ message }) => (
  <div className="w-full h-full flex justify-center items-center bg-rose-500 text-neutral-50 font-mono">
    <pre>{message}</pre>
  </div>
);

export default Preview;
