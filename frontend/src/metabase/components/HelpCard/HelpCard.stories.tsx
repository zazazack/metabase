import React from "react";
import type { ComponentStory } from "@storybook/react";
import HelpCard from "./HelpCard";

// eslint-disable-next-line import/no-default-export -- deprecated usage
export default {
  title: "Components/HelpCard",
  component: HelpCard,
};

const Template: ComponentStory<typeof HelpCard> = args => {
  return <HelpCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Need help with anything?",
  helpUrl: "https://metabase.com",
  children:
    "See our docs for step-by-step directions on how to do what you need.",
};
