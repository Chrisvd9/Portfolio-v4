import { DiWindows } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

const PortfolioCTFCard = ({
  title,
  description,
  image,
  machine,
  difficulty,
  link,
  solve,
  id,
}) => {
  return (
    <article className="overflow-hidden rounded-lg chrisvd9_transition hover:shadow-lg">
      <img
        alt={description}
        src={image}
        className="h-48 object-cover w-full"
        loading="lazy"
      />

      <div className="border dark:border-border_dark">
        <div className="grid grid-cols-2 gap-4 border-t border-b dark:border-border_dark p-2">
          <span className="px-4 py-1 rounded-full text-center justify-center border border-secondary text-sm flex items-center gap-2">
            {machine === "linux" ? (
              <FcLinux className="size-5" />
            ) : (
              <DiWindows className="size-5" />
            )}
          </span>

          <span className="px-4 py-1 rounded-full text-center justify-center border border-secondary text-sm flex items-center gap-2">
            {difficulty}
          </span>
        </div>

        <div className="p-4">
          <h3 className="mt-0.5 text-lg">{title}</h3>
          <p className="mt-2 line-clamp-3 text-sm/relaxed parrafo">
            {description}
          </p>

          <div className="grid sm:grid-cols-2 mt-4 place gap-4">
            <a
              className="inline-block text-center rounded-lg border dark:border-border_dark px-12 py-3 text-sm font-medium text-secondary chrisvd9_transition hover:bg-gray_light dark:hover:bg-border_dark active:animate-button-pop"
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>

            <a
              className="inline-block text-center rounded-lg border dark:border-border_dark px-12 py-3 text-sm font-medium text-secondary chrisvd9_transition hover:bg-gray_light dark:hover:bg-border_dark active:animate-button-pop"
              href={solve || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solve
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCTFCard;
