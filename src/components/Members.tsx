import React from "react";
import Member from "./common/Member";
import { type Member as MemberType } from "@/types";

const Members: React.FC<{
  members: MemberType[];
}> = ({ members }: { members: MemberType[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 p-4 md:hidden">
      {members.map(({ _id, ...rest }) => (
        <div
          key={_id}
          className="w-full h-[250px] flex items-center justify-center"
        >
          <Member size="short" _id={_id} {...rest} />
        </div>
      ))}
    </div>
  );
};

export default Members;
