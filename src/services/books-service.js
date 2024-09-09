const BASE_URL = "https://www.googleapis.com"


export const getBooks = async (query) => {
    if (query.trim() == '') {
        throw new Error('Cannot send blank query!')
    }
    const response = await fetch(`${BASE_URL}/books/v1/volumes?q=${query}`)
    if (!response.ok) {
        throw new Error('Failed to fetch')
    }
    const data = await response.json()
    //check this works
    if (data.totalItems === 0) {
        throw new Error('no Books found for ' + query)
    }
    console.log(data)
    return data
}

//check total items