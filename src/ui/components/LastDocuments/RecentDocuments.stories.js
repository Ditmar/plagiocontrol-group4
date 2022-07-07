import React from "react";
import {RecentDocuments} from "./RecentDocuments";
export default {
  title: "./RecentDocuments",
  component: RecentDocuments,
};

const Template = (args) => <RecentDocuments {...args} />;
export const DefaultButton = Template.bind({});