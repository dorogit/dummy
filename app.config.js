const myValue = 'My App';

module.exports = {
  name: myValue,
  owner: "doroexpo",
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
  slug: "dummy",
  extra: {
    fact: 'kittens are cool',
    eas:{
      projectId:"ebd6e059-6d19-47af-8159-2763c47d7bb7" 
    }
  },
  android:{
    package:"com.todo.app"
  }
};
