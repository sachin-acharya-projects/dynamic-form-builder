import { FormField } from "@/types/index.ts"
import { Checkbox } from "./ui/checkbox"
import { DatePicker } from "./ui/date-picker"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select } from "./ui/select"
import {
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Button } from "./ui/button"

type Props = {
    fields: FormField[]
}

export default function Preview({ fields }: Props) {
    return (
        <div>
            <h2 className="pt-2 text-xl font-semibold">Preview</h2>
            <div className="flex flex-col gap-4">
                {fields.map((field) => getField(field))}
                <Button variant={"secondary"}>Submit</Button>
            </div>
        </div>
    )
}

function getField({
    id,
    label,
    description,
    placeholder,
    isRequired = false,
    isDisabled = false,
    elementInfo: { id: el_type },
}: FormField) {
    switch (el_type) {
        case "checkbox":
            return (
                <div className="flex gap-3 border p-2 rounded-sm">
                    <Checkbox
                        name={id}
                        required={isRequired}
                        id={id}
                        disabled={isDisabled}
                    />
                    <p className="h-full">
                        <label
                            htmlFor={id}
                            className="block mt-[-5px] font-medium cursor-pointer"
                        >
                            {label} {isRequired && "*"}
                        </label>
                        <p className="text-sm text-gray-500">{description}</p>
                    </p>
                </div>
            )
        case "datepicker":
            return (
                <div>
                    <label htmlFor={id} className="block font-semibold">
                        {label} {isRequired && "*"}
                    </label>
                    <DatePicker />
                </div>
            )
        case "input":
            return (
                <div>
                    <label htmlFor={id} className="font-semibold">
                        {label} {isRequired && "*"}
                    </label>
                    <Input
                        type="text"
                        className="mt-1"
                        id={id}
                        placeholder={placeholder}
                    />
                </div>
            )
        case "password":
            return (
                <div>
                    <label htmlFor={id} className="font-semibold">
                        {label} {isRequired && "*"}
                    </label>
                    <Input
                        type="password"
                        className="mt-1"
                        id={id}
                        placeholder={placeholder}
                    />
                </div>
            )
        case "select":
            return (
                <div>
                    <label htmlFor={id} className="font-semibold block">
                        {label} {isRequired && "*"}
                    </label>
                    <Select>
                        <SelectTrigger id={id}>
                            <SelectValue placeholder="Select Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            )
        case "textarea":
            return (
                <div>
                    <label htmlFor={id} className="font-semibold">
                        {label} {isRequired && "*"}
                    </label>
                    <Textarea
                        className="mt-1"
                        id={id}
                        placeholder={placeholder}
                    />
                </div>
            )
        default:
            return null
    }
}
