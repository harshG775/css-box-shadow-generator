import React from "react";
import { icons, LucideProps } from "lucide-react";

export type LucideIconsNameTypes = keyof typeof icons
export type IconProps = Omit<LucideProps, "ref"> & {
    name: keyof typeof icons;
};

const Icon: React.FC<IconProps> = ({ name, color, size, ...props }) => {
    const LucideIcon = icons[name];

    return <LucideIcon color={color} size={size} {...props} />;
};

export default Icon;
