import { FieldType, FormField } from "@/types"
import { useCallback, useRef, useState } from "react"
import AddButton from "./AddButton"
import FormElement from "./FormElement"
import Preview from "./Preview"

const formElements: FieldType[] = [
    {
        id: "checkbox",
        name: "Checkbox",
        label: "Use different settings for my mobile devices",
        description:
            "You can manage your mobile notifications in the mobile settings page.",
    },
    {
        id: "input",
        name: "Input",
        label: "Username",
        description: "This is your public display name.",
    },
    {
        id: "password",
        name: "Password",
        label: "Password",
        description: "Enter your password",
    },
    {
        id: "datepicker",
        name: "Date Picker",
        label: "Date of Birth",
        description: "Your date of birth is used to calculate your age.",
    },
    {
        id: "select",
        name: "Select",
        label: "Theme",
        description: "You can select theme for the interface.",
    },
    {
        id: "textarea",
        name: "Textarea",
        label: "Bio",
        description: "You can @mention other users and organizations.",
    },
]

export default function FormBuilder() {
    const [fields, setFields] = useState<FormField[]>([])
    const dragItem = useRef<number>(0)
    const draggedOverItem = useRef<number>(0)

    function deleteField(id: string) {
        const updatedItems = fields.filter((data) => data.id !== id)
        setFields(updatedItems)
    }

    const handleSort = useCallback(() => {
        const fieldsClone = [...fields]
        const [movedItem] = fieldsClone.splice(dragItem.current, 1)
        fieldsClone.splice(draggedOverItem.current, 0, movedItem)
        setFields(fieldsClone)
    }, [fields])

    return (
        <main className="flex min-h-screen md:flex-row flex-col">
            {/* SideBar */}
            <div className="p-3 h-full px-4 dark:bg-slate-900 bg-transparent">
                <h1 className="text-xl pt-4 font-semibold">Form Elements</h1>
                <p className="text-gray-500 text-sm dark:text-gray-300 pb-4">
                    Select element to add to your form.
                </p>
                <div className="flex md:flex-col gap-2 flex-wrap">
                    {formElements.map((element) => (
                        <AddButton
                            key={element.id}
                            label={element.name}
                            onClick={() =>
                                setFields([
                                    ...fields,
                                    {
                                        id: `${element.id}_${Date.now()}`,
                                        className: "",
                                        description: element.description,
                                        label: element.label,
                                        name: `name_${Date.now()}`,
                                        elementInfo: {
                                            id: element.id,
                                            name: element.name,
                                        },
                                        placeholder: "",
                                        isDisabled: false,
                                        isRequired: false,
                                    },
                                ])
                            }
                        />
                    ))}
                </div>
            </div>
            {/* Content */}
            <div className="flex flex-col md:flex-row md:justify-between w-full">
                <div className="w-full md:max-w-[400px] border-b-[1px] p-4 md:border-r-[1px] overflow-hidden overflow-y-scroll">
                    <h2 className="text-xl font-semibold pt-2">Form Editor</h2>

                    {fields.map((field, index) => (
                        <FormElement
                            onDelete={() => deleteField(field.id)}
                            onDragStart={() => {
                                dragItem.current = index
                            }}
                            onDragEnter={() =>
                                (draggedOverItem.current = index)
                            }
                            onDragEnd={handleSort}
                            onDragOver={(e) => {
                                e.preventDefault()
                            }}
                            label={field.elementInfo.name}
                            key={field.id}
                        />
                    ))}
                </div>
                <form className="w-full border-t-[1px] p-4 md:border-l-[1px] flex flex-col gap-3 overflow-hidden overflow-y-scroll">
                    <Preview fields={fields} />
                </form>
            </div>
        </main>
    )
}
