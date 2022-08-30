import {apiInstance} from "../Instance/Instance";

export const apiGameMethods = {
    getEasy() {
        return apiInstance.get(`comments?limit=300`)
    },
    getMedium() {
        return apiInstance.get(`quotes?limit=150`)
    },
}