"use client";
import { DotsIcon, EditIcon, PlusIcon, TrashBinIcon } from "../../../public/icon";
import { FC, useRef, useState } from "react";
import { Button, useEventOutsideElement } from "../../shared";

export const CardMoreInfo: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const moreInfoRef = useRef<HTMLDivElement>(null);
  useEventOutsideElement(moreInfoRef, "click", () => setOpen(false));
  return (
    <div className="relative" ref={moreInfoRef}>
      <Button onClick={() => setOpen((prev) => !prev)}>
        <DotsIcon />
      </Button>
      {isOpen && (
        <div className="animate-in fade-in zoom-in absolute left-0 flex w-fit flex-col items-start gap-y-4 text-nowrap rounded-md border-2 bg-white p-3">
          <Button className="flex gap-2">
            <EditIcon />
            Edit
          </Button>
          <Button className="flex gap-2">
            <PlusIcon />
            Add new card
          </Button>
          <Button className="flex gap-2 font-semibold text-red-500">
            <TrashBinIcon className="stroke-red-500" />
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};
