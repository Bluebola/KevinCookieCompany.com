fakeRequestPromise('www.getAPIhere.com/page1')
    .then(
        () => {
            console.log('congrats foo it worked the promise was resolved')
            return fakeRequestPromise('www.getAPIhere.com/page2')
        }
    )
    .then(
        () => {
            console.log('congrats foo it worked the promise was resolved')
            return fakeRequestPromise('www.getAPIhere.com/page3')
        }
    )
    .then (
        () => {
            console.log('congrats foo it worked the promise was resolved')
        }
    )
    .catch(() => {
        console.log ('shag bro it failed')
    })


    alert ('YOLO SWAG')


    const fakeRequest = (url) => {
        return new Promise((resolve, reject) => {
            if (x>0) {
                resolve()
            }
            else (
                reject()
            )
        })
    }