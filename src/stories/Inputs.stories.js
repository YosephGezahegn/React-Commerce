import { Input } from "components";
export default {
  title: "byad_s_application4/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  variant: "OutlineBluegray100",
  size: "md",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
