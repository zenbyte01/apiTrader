import Image from "next/image";

const UserPane = () => {
  return (
    <div>
      <Image src="/avatar.png" alt="avatar" height={40} width={40} />
    </div>
  );
};

export default UserPane;
