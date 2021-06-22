export default interface Lessons {
  project: string,
  theme: string,
  title: string,
  icon: string,
  description: string,
  creator: {
    user: string,
    date: string,
  },
  links: [{
    name: string,
    url: string,
    creator: {
      user: string,
      date: string,
    },
  }],
}
