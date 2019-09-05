function makeUsersArray() {
  return [
    {
      id: 1,
      date_created: '2029-01-22T16:28:32.615Z',
      fullname: 'Sam Gamgee',
      username: 'sam.gamgee@shire.com',
      password: 'secret',
      nickname: 'Sam'
    },
    {
      id: 2,
      date_created: '2100-05-22T16:28:32.615Z',
      fullname: 'Peregrin Took',
      username: 'peregrin.took@shire.com',
      password: 'secret',
      nickname: 'Pippin'
    },
    {
      id: 3,
      date_created: '2100-05-22T16:28:32.615Z',
      fullname: 'Spongebob Squarepants',
      username: 'iluvkrabbypatties@bikini.bottom',
      password: 'secret',
      nickname: 'Spongebob'
    }
  ]
}

module.exports = {
  makeUsersArray
}