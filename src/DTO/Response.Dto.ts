export class response {
    private statusCode: STATUS
    private status: string
    private message: string
    private isSuccess: boolean
    private data?: any

    getData() {
        return this.data
    }
    setData(data: string) {
        this.data = data
    }
    setStatusCode(statusCode: STATUS) {
        this.statusCode = statusCode
    }
    getStatusCode() { return this.statusCode }
    


}


enum STATUS { SUCCESS = 1, FAILED = 0 }