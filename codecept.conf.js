

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: "https://www.unir.net/",
      windowSize: '1920x1080',
      show: true,

    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    unirHome: './pages/unirHomePage.js',
    informacionPage: './pages/informationPage.js',

  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js','./step_definitions/loginSteps.js','./step_definitions/solicitudInformacion.js','./step_definitions/EnvioFormulario.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    allure: {},
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport:true,
    },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Codecepjs'
}