import React from 'react';
import Link from 'next/link';
import s from './Button.module.css'

type ButtonPropsType = {
  link?: string
  children: React.ReactNode
}

function Button(props: ButtonPropsType) {

  if (props.link) {
    return <Link href={props.link}>
      <a className={s.btn}>{props.children}</a>
    </Link>
  }
  return <button className={s.btn}>{props.children}</button>
}

export default Button;
