import { useState } from "react";

export function Navbar() {
  const [language] = useState("dk");

  return <nav>Current language is {language}</nav>;
}
