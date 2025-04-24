import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The maximum number of avatars to display before showing a "+X" indicator
   * @default 3
   */
  max?: number;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 3, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const maxAvatars = max < childrenArray.length ? max : childrenArray.length;
    const remainingAvatars = childrenArray.length - maxAvatars;

    return (
      <div
        ref={ref}
        className={cn("flex -space-x-3", className)}
        {...props}
      >
        {childrenArray.slice(0, maxAvatars).map((child, index) => {
          return React.isValidElement(child)
            ? React.cloneElement(child, {
                className: cn("border-2 border-background", child.props.className),
                key: index,
              })
            : null;
        })}
        {remainingAvatars > 0 && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-zinc-900 text-xs font-medium text-white">
            +{remainingAvatars}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
