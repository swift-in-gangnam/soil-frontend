import Button from ".";

export default {
    title: "Atoms/Button",
    component: [Button],
  };

export const PrimaryButton = () => (
    <Button >Primary</Button>
);

export const ButtonWithLink = () => (
    <Button href="/">Link</Button>
)