export default interface Projects {
  _id?: string,
  title: string,
  icon: string,
  creator: {
    user: string,
    date: string,
  },
  crew: [{
    user: string,
    mail: string,
    img: string,
  }],
}
