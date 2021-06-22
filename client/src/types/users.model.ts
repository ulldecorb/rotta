export default interface Users {
  name: string,
  mailto: string,
  img: string,
  admin: boolean,
  projectsAffiliation: {
    projectName: string,
    wishList: [
      { _id: string },
    ],
  },
}
