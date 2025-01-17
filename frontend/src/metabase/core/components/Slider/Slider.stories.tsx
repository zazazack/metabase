import React from "react";
import type { ComponentStory } from "@storybook/react";
import Slider from "./Slider";

// eslint-disable-next-line import/no-default-export -- deprecated usage
export default {
  title: "Core/Slider",
  component: Slider,
  argTypes: { onChange: { action: "onChange" } },
};

const Template: ComponentStory<typeof Slider> = args => {
  const value = [10, 40];
  return (
    <div className="pt4">
      <Slider {...args} value={value} onChange={args.onChange} />
    </div>
  );
};

export const Default = Template.bind({});
