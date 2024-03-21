const CAT_ENDPOINT_IMAGE_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_IMAGE_URL)
    const data = await res.json()
    const { fact } = data
    return fact
}