import Image from "next/image";

interface Props {
  text: string;
  image: string;
}

export default function Info(props: Props) {
  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src={props.image}
        alt="File icon"
        width={16}
        height={16}
      />
      {props.text}
    </a>
  );
}
