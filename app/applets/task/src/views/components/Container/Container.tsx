import React, {forwardRef} from 'react';
import classNames from 'classnames';

import {Handle, Remove} from '../Item';
import { Button, Text, UIView, css } from '@tuval/forms';
import { is } from '@tuval/core';

const ContainerClass = css`
  display: flex;
  flex-direction: column;
  grid-auto-rows: max-content;
  overflow: hidden;
  box-sizing: border-box;
  appearance: none;
  outline: none;
  min-width: 350px;
  /* margin: 10px; */
  margin-bottom: 20px;
  border-radius: 5px;
  min-height: 50px; 
  transition: background-color 350ms ease;
  /* background-color: rgba(246, 246, 246, 1); */
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  font-size: 1em;

  ul {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(var(--columns, 1), 1fr);
    list-style: none;
    /*  padding: 10px;  */
    margin: 0;
  }

  &.scrollable {
    ul {
      overflow-y: auto;
    }
  }

  &.placeholder {
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
    background-color: transparent;
    border-style: dashed;
    border-color: rgba(0, 0, 0, 0.08);

    &:hover {
      border-color: rgba(0, 0, 0, 0.15);
    }
  }

  &.hover {
    /* background-color: rgb(235, 235, 235, 1); */
  }

  &.unstyled {
    overflow: visible;
    background-color: transparent !important;
    border: none !important;
  }

  &.horizontal {
    width: 100%;

    ul {
      grid-auto-flow: column;
    }
  }

  &.shadow {
    box-shadow: 0 1px 10px 0 rgba(34, 33, 81, 0.1);
  }

  &:focus-visible {
    border-color: transparent;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0), 0 0px 0px 2px #4c9ffe;
  }

`

const ActionClassName = css`
display: flex;

  > *:first-child:not(:last-child) {
    opacity: 0;

    &:focus-visible {
      opacity: 1;
    }
  }
  `

const HeaderClass = css`
display: flex;
padding: 5px 20px;
padding-right: 8px;
align-items: center;
justify-content: space-between;
/* background-color: #fff; */
border-top-left-radius: 5px;
border-top-right-radius: 5px;
/* border-bottom: 1px solid rgba(0, 0, 0, 0.08); */

&:hover {
  .Actions > * {
    opacity: 1 !important;
  }
}
`

export interface Props {
  children: React.ReactNode;
  template?:(args: any)=> UIView
  columns?: number;
  label?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  hover?: boolean;
  handleProps?: React.HTMLAttributes<any>;
  scrollable?: boolean;
  shadow?: boolean;
  placeholder?: boolean;
  unstyled?: boolean;
  onClick?(): void;
  onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      template,
      columns = 1,
      handleProps,
      horizontal,
      hover,
      onClick,
      onRemove,
      label,
      placeholder,
      style,
      scrollable,
      shadow,
      unstyled,
      ...props
    }: Props,
    ref
  ) => {
    const Component = onClick ? 'button' : 'div';

    return (
      <Component
        {...props}
        ref={ref as any}
        style={
          {
            ...style,
            '--columns': columns,
          } as React.CSSProperties
        }
        className={classNames(
          ContainerClass,
          unstyled && "unstyled",
          horizontal && "horizontal",
          hover && "hover",
          placeholder && "placeholder",
          scrollable && "scrollable",
          shadow && "shadow"
        )}
        onClick={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
        {
          is.function(template) ? template({label})?.render() : void 0
        }
        {(!is.function(template) && label) ? (
          <div className={HeaderClass}>
            {label}
            <div className={ActionClassName}>
             {/*  {onRemove ? <Remove onClick={onRemove} /> : undefined} */}
             {/*  <Handle {...handleProps} /> */}
            </div>
          </div>
        ) : null}
        
        {placeholder ? children : <ul>{children}</ul>}
       
      </Component>
    );
  }
);
