console.log('Happy developing ✨')

new Vue({
  el: '#app',
  data() {
    return {
      test: 'Hello World',
      stopArray: ["3.22","3.23","3.24","4.13","4.14","5.4","5.5","5.18","5.19","6.1","6.2","6.22","6.23","7.20","7.21","8.3","8.4","8.17","8.18","8.31","9.1"],
      form: {
        hk: [],
        hz: [],
        cd: [],
        zz: [],
        sz: [],
        bj: [],
        wh: [],
        xm: [],
        cq: [],
        gz: [],
      },
      selectedStopIndex: [],
      checkAll: false,
      isIndeterminate: false,
      showResult: false,
      totalCity: 0,
      totalOrderTime: 0,
      totalOrderTimeDesc: {
        min: 0,
        sec: 0,
        desc: 0,
      },
      rank: [],
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await fetch('https://k9yhtp.laf.run/getTotalOrderTime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            [1,2]
        )
      })
      this.test = await res.json()
    },

    handleCheckAllChange(val) {
      if (val) {
        this.form = {
          hk: this.stopArray.slice(0, 3),
          hz: this.stopArray.slice(3, 5),
          cd: this.stopArray.slice(5, 7),
          zz: this.stopArray.slice(7, 9),
          sz: this.stopArray.slice(9, 11),
          bj: this.stopArray.slice(11, 13),
          wh: this.stopArray.slice(13, 15),
          xm: this.stopArray.slice(15, 17),
          cq: this.stopArray.slice(17, 19),
          gz: this.stopArray.slice(19, 21)
        }
      } else {
        this.form = {
          hk: [],
          hz: [],
          cd: [],
          zz: [],
          sz: [],
          bj: [],
          wh: [],
          xm: [],
          cq: [],
          gz: [],
        }
      }
      this.getSelectedStopIndex()
      this.isIndeterminate = false
    },

    handleCheckedItemsChange(val) {
      this.getSelectedStopIndex()
      const cnt = this.selectedStopIndex.length
      this.checkAll = cnt === this.stopArray.length
      this.isIndeterminate = cnt > 0 && cnt < this.stopArray.length
    },

    getSelectedStopIndex() {
      this.selectedStopIndex = []
      for (const city in this.form) {
        for (const stop of this.form[city]) {
          this.selectedStopIndex.push(this.stopArray.indexOf(stop) + 1)
        }
      }
      this.selectedStopIndex.sort((a, b) => a - b)
    },

    async onSubmit() {
      this.showResult = true
      this.calcCity()
      await this.calcTotalOrderTime()
      this.calcTotalOrderTimeDesc()
      await this.calcRank()
    },

    calcCity() {
      this.totalCity = 0;
      for (const city in this.form) {
        if (this.form[city].length) {
          this.totalCity++
        }
      }
    },

    async calcTotalOrderTime() {
      const res = await fetch('https://k9yhtp.laf.run/getTotalOrderTime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.selectedStopIndex)
      })
      this.totalOrderTime = await res.json()
    },

    calcTotalOrderTimeDesc() {
      this.totalOrderTimeDesc.min = Math.floor(this.totalOrderTime / 60)
      this.totalOrderTimeDesc.sec = this.totalOrderTime % 60
      this.totalOrderTimeDesc.desc = (this.totalOrderTime / 10800).toFixed(2)
    },

    async calcRank() {
      const res = await fetch('https://k9yhtp.laf.run/getOrderSongsRank', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.selectedStopIndex)
      })
      const rank = await res.json()
      this.rank = rank.map(item => {
        return {
          name: item[0],
          cnt: item[1]
        }
      })
    },

    onBack() {
      this.showResult = false
    }
  }
})
