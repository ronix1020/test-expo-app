import { WritingsInterface } from "../interfaces/HomeInterfaces"
import { baseURL } from "./baseURL"

export const getAllWritings = async () => {
    return new Promise<WritingsInterface[]>( async (resolve, reject) => {
        await fetch(`${baseURL}/writings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            resolve(response.json())
        }).catch((error) => {
            reject(error)
        })
    })
}

export const postWriting = async (title: string, bodyText: string, backgroundColor: string, avatar: string, username: string) => {
    return new Promise( async (resolve, reject) => {
        await fetch(`${baseURL}/writings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                bodyText,
                backgroundColor,
                avatar,
                username
            })
        }).then((response) => {
            resolve(response.json())
        }).catch((error) => {
            reject(error)
        })
    })
}