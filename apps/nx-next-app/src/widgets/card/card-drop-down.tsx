"use client";
import { FC, useRef, useState } from "react";
import { Button, useEventOutsideElement } from "../../shared";
import { ArrowIcon } from "../../../public/icon";
import { cn } from "../../shared/utils/client";

export const CardDropDown: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  useEventOutsideElement(dropDownRef, "click", () => setOpen(false));
  return (
    <div className={cn("relative")} ref={dropDownRef}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          isOpen ? "rounded-t-md" : "rounded-md duration-500",
          "flex w-full items-center justify-between bg-slate-200 p-1 px-3 transition-all",
        )}
      >
        Move to:
        <ArrowIcon className={cn(isOpen && "rotate-180", "transition-transform")} />
      </Button>
      <div className={cn("grid w-full  transition-all duration-500", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="w-full overflow-hidden">
          <div className={cn("flex flex-col divide-y-2 divide-slate-300 rounded-b-md bg-slate-200 p-1 px-3")}>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};
