declare global {
    interface Window {
        appendToDisplay: (value: string) => void;
        setOperation: (operation: string) => void;
        calculateResult: () => void;
        clearDisplay: () => void;
        deleteLastCharacter: () => void;
    }
}
export {};
//# sourceMappingURL=script.d.ts.map