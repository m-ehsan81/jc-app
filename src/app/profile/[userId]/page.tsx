"use client";

import { use } from "react";
import BackButton from "@/components/back-button";
import { AccountInformation, AccountItem } from "@/components/profile";
import { LockCircleSVG, ProfileCircleSVG } from "@/svgs";

const UserProfile: React.FC<{
  params: Promise<{ userId: string }>;
}> = ({ params }) => {
  const { userId } = use(params);

  return (
    <div className="p-6">
      <BackButton title="Profile" />

      <AccountInformation />

      <div className="mt-20">
        <AccountItem
          icon={<ProfileCircleSVG />}
          onClick={() => console.log("first")}
          title="Change Avatar"
        />
        <AccountItem
          icon={<LockCircleSVG />}
          onClick={() => console.log("first")}
          title="Change Password"
        />
      </div>
    </div>
  );
};

export default UserProfile;
