export default [
  // theme
  {
    type: 'select',
    name: 'theme',
    message: 'Pick a theme',
    choices: [
      { title: 'default', value: 'default'},
      { title: 'other', value: 'other', disabled: true },
    ],
    initial: 0
  },
  
  // favicon
  {
    type: 'text',
    name: 'favicon',
    message: 'Path to your favicon ICO image file. We will search also for .png and .apple.png at the same location.'
  },

  // logo
  {
    type: 'text',
    name: 'logo',
    message: 'Path to your logo image file'
  },

  // company
  {
    type: 'text',
    name: 'company',
    message: 'Name of your company'
  }  ,

  // url
  {
    type: 'text',
    name: 'url',
    message: 'URL of your website'
  }   
]
