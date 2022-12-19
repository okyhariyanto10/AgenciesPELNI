export default function ({ children, className }) {
    const addClassName = className ? ` ${className}` : "";

    // const variants = {

    // }
    return (
        <>
            <h1 className={`text-black text-3xl mb-3 font-bold ${addClassName}`}>{children}</h1>
        </>
    )
}