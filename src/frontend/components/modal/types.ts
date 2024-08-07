import { ReactNode } from "react";

export type ModalProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}

export type ModalContentProps = {
    title: string;
    children: ReactNode;
}