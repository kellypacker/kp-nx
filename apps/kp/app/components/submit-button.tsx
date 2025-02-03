export interface ButtonSubmitProps {
    isLoading: boolean;
    label?: string;
}

export function ButtonSubmit(props: ButtonSubmitProps) {
    const { isLoading, label } = props;

    return (
        <button type="submit" disabled={isLoading}>
            <>
                {isLoading && (
                    <div className="animate-pulse text-salmon">
                        <span>Loading</span>
                    </div>
                )}
                {!isLoading && <span>{label || 'Submit'}</span>}
            </>
        </button>
    );
}

export default ButtonSubmit;
