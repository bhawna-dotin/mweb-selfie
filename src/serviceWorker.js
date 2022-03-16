try {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        try {
          navigator.serviceWorker.register('./sw.js').then(r=>{
          }).catch(e=>{
            console.log("SW error", e)
          })
        } catch (e) {
          console.log(e, "error in registration")
        }
      })
    }
  }catch (e) {
    console.log(e, "error in registration")
  }
