import app from "./app";
import Eureka from 'eureka-js-client';
const port = 4040;
const client = new Eureka({
  instance: {
    app: 'validator',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: `http://localhost:${port}/info`,
    port: {
      '$': port,
      '@enabled': true,
    },
    vipAddress: 'duoshu.com/validator',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: '127.0.0.1',
    port: 8761,
    servicePath: '/eureka/apps/'
  },
});
client.logger.level('info');
client.start();
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});