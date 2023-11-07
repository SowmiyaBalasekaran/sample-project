export default {
  name: 'firstComponent',
  data () {
    return {
      counter: 0,
      isDisabled: false,
      listItems: [1, 2, 3]
    }
  },
  computed: {
    getCounterIfLmitiReached () {
      return this.counter > 10
    }
  },
  methods: {
    incrementCounter () {
      this.counter += 1
      this.listItems.push(4)
    },
    resetCounter () {
      this.counter = 0
    },
    getCounterIfLmitiReachedMehthod () {
      return this.counter > 10
    }
  }
}
