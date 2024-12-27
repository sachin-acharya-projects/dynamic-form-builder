export interface FieldType {
    id: string // Unique Identifier
    name: string // Display Name
    label: string // Default Label to show in Form Preview
    description: string
}

export interface FormField {
    id: string
    label: string
    description: string
    placeholder: string
    className: string
    name: string
    isRequired?: boolean
    isDisabled?: boolean
    elementInfo: {
        id: string
        name: string
    }
}
