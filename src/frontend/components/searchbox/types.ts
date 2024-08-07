import { ChangeEvent, ReactNode } from "react";

export type SearchBoxProps =  {
    onSearch?: (query: string) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    Icon: ReactNode;
    value?: string;
    placeholder?: string
}