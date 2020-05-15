// detox build --configuration ios.sim.release
// detox test --configuration ios.sim.release

// detox build --configuration ios.sim.debug
// detox test --configuration ios.sim.debug

//detox build -c android.emu.debug
//detox test -c android.emu.debug

//detox build -c android.emu.release

import * as detox from 'detox';

describe('Several tests on screen', () => {
  beforeEach(async () => {
    await detox.device.reloadReactNative();
  });

  it('should show Ingresar datos textField:', async () => {
    await expect(detox.element(detox.by.text('Ingresar datos:'))).toBeVisible();
  });

  it('should complete Nombre and Apellido input', async () => {
    await detox.element(detox.by.id('name')).typeText('Claudio');
    await detox.element(detox.by.id('lastName')).typeText('Garcete');
  });

  it('should complete Nombre and Apellido input', async () => {
    await detox.element(detox.by.id('name')).typeText('Kari');
    await detox.element(detox.by.id('lastName')).typeText('kari');
  });

  it('should press the button Crear cuenta:', async () => {
    await element(by.text('Crear cuenta').withAncestor(by.id('button1'))).tap();
  });
});
