import { GripVertical, Pencil, Plus, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { DragEventHandler } from "react"

type Props = {
    label: string
    onEdit?: () => void
    onDelete?: () => void
    onDrag?: DragEventHandler<HTMLDivElement>
    onDragStart?: DragEventHandler<HTMLDivElement>
    onDragEnd?: DragEventHandler<HTMLDivElement>
    onDragEnter?: DragEventHandler<HTMLDivElement>
    onDragOver?: DragEventHandler<HTMLDivElement>
}
export default function FormElement({
    label,
    onDelete,
    onEdit,
    onDrag,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDragEnter,
}: Props) {
    return (
        <div
            draggable
            onDrag={onDrag}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            onDragOver={onDragOver}
            className="flex justify-between items-center gap-1 h-[55px]"
        >
            <GripVertical className="cursor-grab" />
            <div className="w-full flex gap-3 p-2 border rounded-lg">
                <h3 className="w-full select-none">{label}</h3>
                <Pencil className="cursor-pointer" onClick={onEdit} />
                <Trash2
                    className="cursor-pointer text-red-500"
                    onClick={onDelete}
                />
            </div>
            <Button className="rounded-full w-10" variant={"secondary"}>
                <Plus />
            </Button>
        </div>
    )
}
