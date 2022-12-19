export default function ButtonItems( {children,className} ) {
    const addClassName = className ? ` ${className}` : "";

    return (
        <button className={`mx-12 px-8 py-2 border-0 bg-red-500 text-white rounded-2xl font-medium text-xl ${addClassName}`} href="/contact">{children}</button>
    )
}