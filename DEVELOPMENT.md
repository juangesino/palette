# Develop Palette

## To-Do
- [x] Add and remove colors
- [ ] Add splash screen while loading
- [ ] Export colors CSV
- [ ] Import colors CSV
- [ ] Add and remove gradients

## Getting Started

0. **Install Meteor**

    On Linux & Mac:

    ```sh
    > curl https://install.meteor.com/ | sh
    ```

    This will setup [Meteor](http://github.com/meteor/meteor) (including [Node](https://github.com/nodejs/node) and [Mongo](https://github.com/mongodb/mongo) if necessary).

    > _Note:_ Windows users must [download installer](https://www.meteor.com/install).

0. **Clone Repository**

    ```sh
    > git clone https://github.com/juangesino/palette.git
    > cd palette
    ```

0. **Install Dependencies**

    If you have npm installed:

    ```sh
    > npm install
    ```

    If you only have meteor:

    ```sh
    > meteor npm install
    ```

0. **Run**

    While in the repository directory run:

    ```sh
    > electrify
    ```

    A new desktop window will open, but you can also head over to [localhost:3000]() for an online version.


## Build

To package the app run:

```
> electrify package -- --icon=private/icon.png.icns --ignore=.meteor/local
```

**Note**: Electrify doesn't ignore its own `.dist` directory when packaging the app ([#68](https://github.com/arboleya/electrify/issues/68)). Before packaging, remove this directory.

## Built With

* [Meteor](https://www.meteor.com/)
* [Electrify](https://github.com/arboleya/electrify)
* [Bootstrap](http://getbootstrap.com/)
* [jQuery](https://jquery.com/)

## Contributing

1. Fork it ( https://github.com/juangesino/palette/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

See [LICENSE](https://github.com/juangesino/palette/blob/master/LICENSE).
