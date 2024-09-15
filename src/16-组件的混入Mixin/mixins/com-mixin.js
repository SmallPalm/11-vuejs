export default {
  data() {
    return {
      count: 1
    }
  },
  emits: ["btnClick"],
  methods: {
    btnClick() {
      console.log("BtnClick")
      this.$emit("btnClick", "124r123")
    }
  }
}