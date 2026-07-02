import {
  SiNodedotjs,
  SiPython,
  SiGo,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiTypescript,
  SiAmazonwebservices,
  SiPhp,
  SiReact,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const icons = [
  { Icon: SiNodedotjs, color: "#5FA04E" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: FaJava, color: "#F89820" },
  { Icon: SiPhp, color: "#777BB4" },
  { Icon: SiGo, color: "#00ADD8" },
  { Icon: SiDocker, color: "#2496ED" },
  { Icon: SiKubernetes, color: "#326CE5" },
  { Icon: SiPostgresql, color: "#4169E1" },
  { Icon: SiAmazonwebservices, color: "#FF9900" },
];

export default function TechIconGrid() {
  return (
    <div className="flex h-full w-full flex-wrap md:flex-nowrap content-center items-center justify-center gap-2 px-4">
      {icons.map(({ Icon, color }, idx) => (
        <div
          key={idx}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
        >
          <Icon className="h-4 w-4" style={{ color }} />
        </div>
      ))}
    </div>
  );
}
