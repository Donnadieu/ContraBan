# ContraBan #

This app is written in React utilizing Redux to maintain state. It is built on a Rails back end setup to serve as an API end point. Uses etherum gem to connect to etherum blockchain

## Usage ##

This app allows you to create a unique identifier (smart contract) to represent ownership of a Collectible by deploying the information into the etherum blockchain. You can also transfer ownership, verify authenticity and see the history of  your Collectible.

```shell
git clone https://github.com/Donnadieu/rails-etherum-app.git
cd rails-etherum-app
cd api
bundle install
rails db:setup
bundle exec rails server
```
In another terminal:
```shell
cd ..
cd client
npm install
npm start
```
## Contributing ##

Bug reports and pull requests are welcome on GitHub at https://github.com/Donnadieu/rails-etherum-app. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://github.com/Donnadieu/rails-etherum-app/master/CONTRIBUTING.md) code of conduct.

## License ##

The app is available as open source under the terms of the [MIT License](https://github.com/itzsaga/foodie-view/blob/master/LICENSE).
