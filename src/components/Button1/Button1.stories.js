import { Button1 } from ".";

export default {
  title: "Components/Button1",
  component: Button1,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
  },
};
