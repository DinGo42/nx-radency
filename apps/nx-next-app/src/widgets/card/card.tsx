import { FC } from "react";
import { PriorityTypes } from "@/db/prisma";
import { CalendarIcon } from "../../../public/icon";
import { CardDropDown } from "./card-drop-down";
import { CardMoreInfo } from "./card-more-info";

export type CardProps = {
  title: string;
  description: string;
  createdAt: Date;
  priority: PriorityTypes;
};

export const Card: FC<CardProps> = ({ createdAt, description, priority, title }) => {
  return (
    <div className="m-auto mt-10 flex h-fit w-[300px] flex-col gap-3 rounded-lg border-2 border-gray-300 p-4">
      <div className="flex w-full justify-between">
        <span className="text-xl">{title}</span>
        <CardMoreInfo />
      </div>
      <span className="text-sm text-gray-600">{description}</span>
      <div className="flex gap-2 text-base text-gray-700">
        <CalendarIcon />
        Wed, 19 Apr
      </div>
      <div className="relative flex w-fit items-center rounded-full bg-slate-100 p-1 pl-10 pr-5 text-sm text-slate-600 before:absolute before:left-3 before:size-2 before:rounded-full before:bg-slate-400">
        {priority}
      </div>
      <CardDropDown />
    </div>
  );
};
