import type { Meta, StoryObj } from "@storybook/react";

import Page from "./page";
import { QueryClient, QueryClientProvider } from "react-query";

const meta = {
	title: "Page/ProductList",
	component: Page,
	parameters: {
		layout: "centered",
	},
    decorators: [
        (Story) => (
            <QueryClientProvider client={new QueryClient()}>
                {Story()}
            </QueryClientProvider>
        ),
    ],
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
};
