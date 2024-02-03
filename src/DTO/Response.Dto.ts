export interface response {
    statusCode: STATUS
    status: string
    message: string
    isSuccess: boolean
    data?: any

}

enum STATUS { SUCCESS = 1, FAILED = 0 }