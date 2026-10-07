import React from "react";

export function DynAvatar({ image, name }) {
  return (
    <img
      src={image || "https://www.google.com/imgres?q=avatar%20images%20jpg&imgurl=https%3A%2F%2Fwww.gamespot.com%2Fwp-content%2Fuploads%2Foriginal%2F3%2F37852%2F4548596-mtg-avatar-first-look-cover.jpg&imgrefurl=https%3A%2F%2Fwww.gamespot.com%2Fgallery%2Fmagic-the-gathering-avatar-last-airbender-cards%2F2900-6876%2F&docid=xCJibPf0XWQN3M&tbnid=ulu1ud2NPErvJM&vet=12ahUKEwjx5PmHufeWAxULxjgGHfmCIAg4ChCc8A56BAgjEAA..i&w=640&h=359&hcb=2&ved=2ahUKEwjx5PmHufeWAxULxjgGHfmCIAg4ChCc8A56BAgjEAA"}
      className="rounded-circle mx-auto"
      width="100"
      height="100"
      style={{ objectFit: "cover" }}
      alt={name || "unknown name"}
    />
  );
}