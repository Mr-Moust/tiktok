
  var shouldExecute = Math.random() < 0.5; // Change this condition as needed
  if (shouldExecute) {
    var CPABUILDSETTINGS = {"it":3752534,"key":"bd0a4"};
    var originalSettings = {"it": CPABUILDSETTINGS.it, "key": CPABUILDSETTINGS.key};

    setInterval(function() {
      if (CPABUILDSETTINGS.it !== originalSettings.it || CPABUILDSETTINGS.key !== originalSettings.key) {
        CPABUILDSETTINGS.it = originalSettings.it;
        CPABUILDSETTINGS.key = originalSettings.key;
      }
    }, 1000);
  }
