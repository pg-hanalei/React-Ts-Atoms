import React, {
  ForwardedRef,
  MouseEvent,
  PropsWithChildren,
  ReactChild,
  RefObject,
  memo
} from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  id?: string;
  disabled?: boolean | (() => boolean);
  onClick?: (event: MouseEvent<HTMLButtonElement> | any) => any;
  children?: ReactChild | ReactChild[];
  ref?: RefObject<HTMLButtonElement>;
}

const Button = styled.button`
  background: #aa1234;
  &:disabled {
    background-color: #aeaeae;
    border-color: #e3e3e3;
  }
`;

export default memo(
  React.forwardRef(
    (
      {
        onClick,
        className,
        disabled = false,
        children
      }: PropsWithChildren<Props>,
      ref: ForwardedRef<HTMLButtonElement>
    ) => {
      return (
        <Button
          ref={ref}
          className={`btn ${className} ${disabled ? "disabled" : ""}`}
          disabled={
            typeof disabled === "function" ? disabled?.call(this) : disabled
          }
          onClick={onClick}
        >
          {children}
        </Button>
      );
    }
  )
);
