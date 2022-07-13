const sleep = (timestamp: number) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => { resolve(20) }, timestamp)
    })
  }
  
  export const printAnswer = async () => {
    await sleep(2000)
    console.log('I am awake')
  }