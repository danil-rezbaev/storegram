import React, { FC } from 'react'

export type BottomControlPanelProps = {
  title?: string,
  className?: string,
  children: React.ReactNode
}

const BottomControlPanel: FC<BottomControlPanelProps> = (props) => {
  const {
    title,
    className,
    children
  } = props

  return (
    <div className="bottom-control-panel">
      /
    </div>
  )
}

export default BottomControlPanel
