'use client'

import { Button } from '@nextui-org/react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function PostCardEditButton () {
  const { pending } = useFormStatus()

  return (
    <Button
      disabled={pending}
      type='submit'
      className='bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end transition'
    >
    {pending ? 'Guardando...' : 'Guardar'}
  </Button>
  )
}
