import React from 'react'

interface button {
 styles: string,
 text: string,
 fn: any
 disabled: boolean
}

export default function Button({
 styles,
 text,
 fn,
  disabled
}: button) {
  return (
    <button
    onClick={fn}
    className={styles}
    disabled={disabled}
    >
    {text}
    </button>
  )
}
