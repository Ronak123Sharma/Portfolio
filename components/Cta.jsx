import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto h2">
        <div className="flex flex-col items-center">
          <h2 className="h3 max-w-xl text-center mb-8">
            I am willing to work with you
          </h2>
          <Link href='/contact'>
          <Button>Contact me</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
