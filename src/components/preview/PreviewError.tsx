export interface Props {
  message: string;
}

const Preview: React.VFC<Props> = ({ message }) => (
  <main className="w-screen h-screen flex justify-center items-center bg-rose-500 text-neutral-50 font-mono">
    <pre>{message}</pre>
  </main>
);

export default Preview;
