import React, { useState } from "react";
import {
  OpenSelector,
  Styled_Tags,
  TagContent,
  TagsConatiner,
} from "../styles/styled";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { poppins, poppinsSemibold } from "@/styles/global";
import { tags } from "@/constants/tags";

const Tags = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function CloseOptions(tag: any) {
    setSelectedTag(tag.tag);
    setIsOpen(false);
  }
  return (
    <TagsConatiner>
      <OpenSelector onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
        <p className={poppinsSemibold.className}>
          {selectedTag ? selectedTag : "Select tag"}
        </p>
      </OpenSelector>
      {isOpen && (
        <Styled_Tags className="__tags_track">
          {tags.map((tag, index) => (
            <TagContent key={index} onClick={() => CloseOptions(tag)}>
              {tag.icon}
              <p className={poppins.className}>{tag.tag}</p>
            </TagContent>
          ))}
        </Styled_Tags>
      )}
    </TagsConatiner>
  );
};

export default Tags;
