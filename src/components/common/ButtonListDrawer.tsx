'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface ActionButtonConfig {
  text: string;
  onClick: () => void;
}

interface ButtonListDrawerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  buttons: ActionButtonConfig[];
}
const ButtonListDrawer = ({ children, title, description, buttons }: ButtonListDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="gap-y-5 pb-10 flex-col-center">
        <DrawerHeader className="gap-y-0.5 p-0 flex-col-center">
          <DrawerTitle className="text-neutral-200 body1-sb">{title}</DrawerTitle>
          {description ? (
            <DrawerDescription className="text-orange-600 body3-r">{description}</DrawerDescription>
          ) : (
            /* 접근성 경고 방지용 Description */
            <VisuallyHidden>
              <DrawerDescription>Drawer Description</DrawerDescription>
            </VisuallyHidden>
          )}
        </DrawerHeader>
        <div className="w-full gap-y-2 px-5 text-white flex-col-center body3-r">
          {buttons.map((button, index) => (
            <DrawerClose
              key={index}
              className="h-10 w-full cursor-pointer rounded-md border border-neutral-400 py-2.5 text-center transition-colors duration-100 hover:bg-neutral-950/50"
              onClick={button.onClick}>
              {button.text}
            </DrawerClose>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default ButtonListDrawer;
