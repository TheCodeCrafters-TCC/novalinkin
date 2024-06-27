import { useMobileSideNav } from "@/context/useMobileNav";
import { useToaster } from "@/hooks/useToast";
import { LinkWrap } from "@/styles/components/styled";
import { poppinsSemibold } from "@/styles/global";
import { useRouter } from "next/router";
import React from "react";
import { FaUser } from "react-icons/fa6";

interface LinkProps {
  hasLink?: boolean;
  label: string;
  icon: React.ReactElement;
  url?: string | any;
}

const MSBLink_Content: React.FC<LinkProps> = ({
  hasLink,
  icon,
  label,
  url,
}) => {
  const router = useRouter();
  const { toast } = useToaster();
  const { Onclose } = useMobileSideNav();

  function visit() {
    if (hasLink) {
      router.push(url);
      Onclose();
    } else {
      toast("info", "Not avaiable");
    }
  }
  return (
    <LinkWrap onClick={visit}>
      {icon}
      <p className={poppinsSemibold.className}>{label}</p>
    </LinkWrap>
  );
};

export default MSBLink_Content;
