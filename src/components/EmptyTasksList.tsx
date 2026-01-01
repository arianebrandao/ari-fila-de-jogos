import Clipboard from '../images/Clipboard.png'

export function EmptyTasksList() {
  return (
    <div className="px-6 py-16 rounded-lg border-t border-gray-400 justify-center items-center flex flex-col">
      <img src={Clipboard} alt="Clipboard" className="mb-4 w-14 h-14" />
      <p className="leading-snug font-bold">
        Você ainda não tem jogos adicionados
      </p>
      <p>Adicione jogos e organize sua fila</p>
    </div>
  )
}
