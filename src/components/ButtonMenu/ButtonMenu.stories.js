import { ButtonMenu } from ".";

export default {
  title: "Components/ButtonMenu",
  component: ButtonMenu,
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
    className: {},
    text: "Inicio",
  },
};
