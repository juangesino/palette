# Develop Palette

## To-Do
- [x] Add and remove colors
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

    While in repository directory run:

    ```sh
    > meteor run --settings settings.json
    ```

    Load browser and go to [http://localhost:3000/](http://localhost:3000/)

    Or navigate to `.meteor-electron/darwin-x64/builds/` to find the desktop build.



## Build

Builds are automatically generated at `.meteor-electron/darwin-x64/builds/` and packaged builds are generated at `.meteor-electron/darwin-x64/final/`.

## Built With

* [Meteor](https://www.meteor.com/)
* [meteor-electron](https://github.com/electron-webapps/meteor-electron)
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
