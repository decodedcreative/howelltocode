import type { Meta, StoryObj } from "@storybook/react";

function IntroductionContent() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: "40rem" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Design System</h1>
      <p style={{ color: "#555" }}>
        Welcome to the James Howell portfolio design system. Stories for components will appear
        here as they are added.
      </p>
    </div>
  );
}

const meta = {
  title: "Introduction",
  component: IntroductionContent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IntroductionContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DesignSystem: Story = {
  render: () => <IntroductionContent />,
};
