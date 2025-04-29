'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <div className="fixed top-0 left-0 bg-black/70 flex items-center justify-center z-[1000] w-full h-screen">
      <dialog ref={dialogRef} className="w-[80%] max-w-[500px] max-h-3-[500px] p-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>
  );
}