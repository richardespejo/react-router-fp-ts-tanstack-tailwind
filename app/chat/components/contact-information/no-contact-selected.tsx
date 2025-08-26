import { UserCircle } from 'lucide-react'
import React from 'react'

const NoContactSelected = () => {
  return (
<div className="w-80 border-l flex flex-col items-center justify-center h-full">
  <div className="flex flex-col items-center justify-center p-8">
    <UserCircle className="w-12 h-12 text-gray-400 mb-4" />
    <span className="text-lg font-semibold text-gray-700 mb-2">Ningún contacto seleccionado</span>
    <span className="text-sm text-gray-500 text-center">
      Por favor selecciona un contacto para ver la información.
    </span>
  </div>
</div>
  )
}

export default NoContactSelected
