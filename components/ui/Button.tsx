
import Link from "next/link";


interface ButtonProps {
  name: string
  className?: string
  link?: string
}

const Button: React.FC<ButtonProps> = ({ name, className, link }) => {
  return (
    <div
      className={`flex items-center justify-center border border-solid cursor-pointer rounded-lg ${className} w-full`}
    >
      {link ? (
        <Link href={link}>
          <button
            type="button"
            className="text-sm w-full px-5 py-2"
          >
            {name}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className="text-sm w-full px-5 py-2"
        >
          {name}
        </button>
      )}
    </div>
  );
};

export default Button;
