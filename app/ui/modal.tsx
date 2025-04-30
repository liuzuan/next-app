'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/outline'

export function Modal({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return (
    <div className='fixed top-0 left-0 bg-black/70 flex items-center justify-center z-[1000] w-full h-screen'>
      <dialog
        ref={dialogRef}
        className='w-[80%] max-w-[500px] max-h-3-[500px] p-5 pt-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg'
        onClose={onDismiss}
      >
        <div className='flex items-center justify-between py-2'>
          <i></i>
          <h2 className='text-lg font-bold text-center '>{title}</h2>
          <XMarkIcon
            onClick={onDismiss}
            className='self-end w-7'
          />
        </div>
        {children}
      </dialog>
    </div>
  )
}
