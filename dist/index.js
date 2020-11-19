"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = express_server;

var _path = _interopRequireDefault(require("path"));

var _consola = _interopRequireDefault(require("consola"));

var _security = require("./security");

var _database = _interopRequireDefault(require("./config/database"));

var _environment = _interopRequireDefault(require("./config/environment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function express_server(express) {
  this.app = express();
  /** @databaseInitiation
   * Function to initiate the database connection
   * @returns {this} reference to the function it selt
   */

  this.initDatabase = () => {
    _database.default.authenticate().then(() => {
      if (_environment.default.NODE_ENV === 'production') {
        _consola.default.success({
          message: `Database connected successfully to ${_environment.default.DATABASE_URL}`,
          badge: true
        });
      } else if (_environment.default.NODE_ENV === 'dev') {
        _consola.default.success({
          message: `Database connected successfully to ${_environment.default.POSTGRES_DB} database`,
          badge: true
        });
      }
    }).catch(error => console.error(`Unable to connect to ${_environment.default.POSTGRES_DB} database:`, error));

    return this;
  };
  /** @middlewareHandler
   * Function to add middleware
   * @returns {this} reference to the express app
   * @param middleware
   */


  this.addMiddleware = middleware => {
    this.app.use(middleware);
    return this;
  };
  /** @helmetSecurityHandler
   * Function to add security headers with Helmet
   * @returns {this} reference to the express app
   * @param helmet
   */


  this.helmetSecurity = helmet => {
    this.app.use(helmet());
    this.app.use(helmet.hsts({
      maxAge: 5184000,
      includeSubDomains: true
    }));
    this.app.use(helmet.featurePolicy({
      features: {
        fullscreen: ["'self'"],
        payment: ["'none'"],
        syncXhr: ["'none'"],
        camera: ["'none'"],
        microphone: ["'none'"]
      }
    }));
    this.app.use(helmet.permittedCrossDomainPolicies());
    this.app.use(helmet.referrerPolicy({
      policy: 'strict-origin-when-cross-origin'
    }));
    return this;
  };
  /** @passportConfiguration
   * Function to configure the passport libary
   * @returns {this} reference to the express app
   * @param passport
   */


  this.passportConfig = passport => {
    (0, _security.authenticateUser)(passport);
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    return this;
  };
  /** @rountingHandler
   * Function to route requests coming in
   * @returns {this} reference to the express app
   * @param route
   */


  this.addRouting = route => {
    /* homepage route */
    this.app.get('/', (req, res) => {
      return res.sendFile(_path.default.join(__dirname + '/public', 'dist', 'index.html'));
    });
    /* API routes */

    this.app.use('/server/api/', route.usersRoutes);
    this.app.use('/server/api/', route.groupsRoutes);
    this.app.use('/server/api/', route.productsRoutes);
    this.app.use('/server/api/', route.shoppingListRoutes);
    /* ANY route */

    this.app.get('*', (req, res) => {
      return res.sendFile(_path.default.join(__dirname + '/public', 'dist', 'index.html'));
    });
    return this;
  };
  /** @staticFilesHandler
   * Function to serve static files
   * @returns {this} reference to the express app
   */


  this.serveStaticFiles = () => {
    this.app.use(express.static(_path.default.join(__dirname, '/public', 'dist')));
    return this;
  };
  /** @expressPortHandler
   * Function to handle which port the express server listens on
   * @returns {this} reference to the express app
   * @param port
   */


  this.listenOn = port => {
    this.app.listen(port, () => _consola.default.info({
      message: `Server started on port ${port}`,
      badge: true
    }));
    return this;
  };
  /** @errorHandler
   * Function to handle erros of type 500
   * @returns {this} return an error message with an http code
   */


  this.errorHandler = () => {
    this.app.use((req, res) => {
      const error = new Error("Route Not found !");
      res.status(500).json({
        message: error.message
      });
    });
    return this;
  };
  /** @startServerHandler
   * Function to start the express server
   * @returns {this} reference to the express app
   */


  this.run = () => {
    return this.app;
  };
}