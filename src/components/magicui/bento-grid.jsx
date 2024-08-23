import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon = null,
  description,
  href,
  cta,
  disabled = false,
  hoverMode = true,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <div
      className={cn(
        "pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300",
        hoverMode ? "group-hover:-translate-y-2" : ""
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            "h-12 w-12 origin-left transform-gpu text-[#ec3750] transition-all duration-300 ease-in-out",
            hoverMode ? "group-hover:scale-75" : ""
          )}
        />
      )}
      <h3 className="text-xl font-semibold text-[#ec3750] dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400 mb-4">{description}</p>
      <div
        className={cn(
          "pointer-events-none flex transform-gpu transition-all duration-300 group-hover:translate-y-0"
        )}
      >
        {disabled ? (
          <Button
            variant="ghost"
            size="sm"
            disabled
            className="pointer-events-auto"
          >
            Coming Soon
          </Button>
        ) : (
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto"
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <b>{cta}</b>
              {/* // bold arrow */}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
