import {apiGameMethods} from "./Methods/GameMethods";


export const DataProvider = {
    Game: {
        getEasy() {
            return new Promise((resolve, reject) => {
                apiGameMethods.getEasy()
                    .then((response: any) => {
                        resolve(response.data)
                    })
                    .catch((error) => {
                        try {
                            reject(error.response.data);
                        } catch (e) {
                            reject(error);
                        }
                    })
            })
        }
    }
}

