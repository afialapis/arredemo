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

  // url
  {
    type: 'text',
    name: 'url',
    message: 'URL of your website'
  } ,

  // company
  {
    type: 'text',
    name: 'company',
    message: 'Name of your company'
  }  ,  

  // company_url
  {
    type: 'text',
    name: 'company_url',
    message: 'URL of your Company'
  } 
]
