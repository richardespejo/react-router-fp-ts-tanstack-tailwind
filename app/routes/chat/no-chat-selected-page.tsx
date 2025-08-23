import { MessageCircle } from "lucide-react"

const NoChatSelectedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
      <MessageCircle className="mx-auto mb-4 h-16 w-16 text-gray-300" >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </MessageCircle>
      <p className="text-lg font-semibold">No hay un chat seleccionado</p>
      <p className="text-sm">Por favor, selecciona un chat para comenzar la conversación.</p>
    </div>
  )
}

export default NoChatSelectedPage
