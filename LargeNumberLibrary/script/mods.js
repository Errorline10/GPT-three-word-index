mods = {
    delay: (ms) => { return new Promise(resolve => setTimeout(resolve, ms)); },
    use: async (x) => {
      if (mods[x] !== undefined) {
        console.log("mods use = " + x + " | " + mods[x])
        return mods[x]
      }
      else {

        console.log(x + ' is not yet loaded.. trying again...')
        await mods.delay(1)
        console.log('try ' + x)
        window.mods.use(x)

      }
    }
  };







  //console.log(typeof mods.use("bigMath"))
  //mods.use("bigMath").allTests('all');

  //setTimeout(()=>{getIt()},1000)

  //function getIt(){
  //mods.use("bigMath").allTests('all')

  //console.log('out of scope: ' + window.modules.bigMath)
  //mods.use("bigMath").allTests('all');
  //}

