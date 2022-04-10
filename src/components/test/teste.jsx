export const Test = ({frase, children})=>{
    return (
        <div>
            <p>
                {frase}
                {children}
            </p>
        </div>
    )
}