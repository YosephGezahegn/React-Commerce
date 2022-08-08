import { CheckBox } from "components";
export default {
  title: "byad_s_application4/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  variant: "OutlineBluegray100",
  inputClassName: "mr-1",
};
