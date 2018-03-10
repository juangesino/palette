import { Meteor } from 'meteor/meteor';

Colors = new Mongo.Collection("colors");

Meteor.settings.electron = {
  "electron": {
    "name": "Palette",
    "icon": {
      "darwin": "private/MyApp.icns"
    },
    "version": "0.0.1",
    "description": "An app to store all your favourite colours.",
    "rootUrl": "https://github.com/juangesino",
    "downloadUrls": {
      "darwin": "https://github.com/juangesino/palette/{{version}}/palette.zip"
    },
    "height": 768,
    "width": 1024,
    "frame": true,
    "title-bar-style": "hidden",
    "resizable": true
  }
}
