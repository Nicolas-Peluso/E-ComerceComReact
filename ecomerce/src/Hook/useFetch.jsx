import React from "react";

export default function useFetch() {
    const [data, setData] = React.useState(null)
    const [erro, setErro] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    const request = React.useCallback(async (url, Option) => {
        let request;
        let response;
        try {
            setLoading(true)
            request = await fetch(url, Option)
            response = await request.json()
            if (response.ok === false) throw new Error(response.message)
        } catch (erro) {
            setErro(erro)
            setLoading(false)
        } finally {
            setLoading(false)
            setData(response)
            return { response, request }
        }
    }, [])
    return { data, request, erro, loading }
}