import { Button } from "./ui/button"
import { PlusCircle } from "lucide-react"

type ButtonProps = {
    label: string
    onClick?: () => void
}
export default function AddButton({ label, onClick }: ButtonProps) {
    return (
        <Button
            variant={"secondary"}
            className="flex md:w-full hover:bg-slate-600 hover:border hover:text-white transition-all active:scale-95"
            onClick={onClick}
        >
            <PlusCircle />
            <p className="w-full text-left">{label}</p>
        </Button>
    )
}
