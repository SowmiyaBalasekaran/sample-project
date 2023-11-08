export default {
  name: 'sampleComponent',
  data () {
    return {
      firstName: '',
      lastName: '',
      combinedName: '',
      address: '',
      resultAddress: '',
      shouldChangeColor: false,
      manipulatedName: ''
    }
  },
  methods: {
    handleSubmit () {
      this.combinedName = `${this.firstName}${this.lastName}`
      this.resultAddress = `${this.address}`
    },
    nameManupulation () {
    //   return this.combinedName > 5
      this.combinedName = `${this.firstName}${this.lastName}`
      this.resultAddress = `${this.address}`
      this.shouldChangeColor = this.combinedName.length > 5

      //   const name = this.combinedName
      //   if (this.combinedName.length > 5) {
      //     // name.fontcolor = '#2C81B7'
      //     name.color = '#2C81B7'
      //     // name.style.fontcolor = '#2C81B7'
      //   }

      const stringArray = this.combinedName.split('')
      if (this.shouldChangeColor) {
        for (let i = 0; i < stringArray.length; i++) {
          if (i < 5) {
            stringArray[i] = '<span style="color: blue;">' + stringArray[i] + '</span>'
          } else {
            stringArray[i] = '<span style="color: red;">' + stringArray[i] + '</span>'
          }
        }
      }
      // Join the array back into a string
      this.combinedName = stringArray.join('')
    }
  }
}
