import { Switch } from "@/components/ui/switch";

export default function (props: {
  title: string;
  onClick: () => void;
  isChecked: boolean;
}) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <label htmlFor="airplane-mode">{props.title}</label>
      <Switch
        id="airplane-mode"
        onClick={props.onClick}
        checked={props.isChecked}
      />
    </div>
  );
}
