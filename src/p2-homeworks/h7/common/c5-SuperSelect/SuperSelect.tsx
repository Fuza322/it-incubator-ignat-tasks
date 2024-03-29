import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    onChange, onChangeOption,
    ...restProps
}) => {

    const mappedOptions = options ? options.map((item, i) => (
        <option key={i}>
            {item}
        </option>
    )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}