// components/Logo.js
import Image from "next/image";

const Logo = () => (
  <div className="logo">
    <Image src="/images/Logo.png" alt="Logo" width={150} height={50} />
  </div>
);

export default Logo;
