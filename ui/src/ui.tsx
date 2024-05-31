import { Button } from './components/ui/button';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <>
      <div>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <div className="h-full w-full bg-[rgba(255,255,255,0.1)] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-white text-5xl">EXAMPLE APP X</h1>
          <Button className="mt-4">Start</Button>
        </div>
      </div>
    </>
  );
}

export default Ui;
