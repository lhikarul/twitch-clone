import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";
import { Navigation } from "./navigation";

export const Sidebar = async () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};
