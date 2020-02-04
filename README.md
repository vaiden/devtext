# devtext
A small tool for beautifying dev texts (stack traces, log outputs, JSONs)

##### Supports
* Stack trace
* URL encoded strings
* Unformatted JSONs

## Usage
```
npx devtext -h 'com.framework.FrameworkException: Error in web request\n\tat com.framework.ApplicationStarter.lambda$start$0(ApplicationStarter.java:15)\n\tat spark.RouteImpl$1.handle(RouteImpl.java:72)\n\tat spark.http.matching.Routes.execute(Routes.java:61)\n\tat spark.http.matching.MatcherFilter.doFilter(MatcherFilter.java:134)\n\tat spark.embeddedserver.jetty.JettyHandler.doHandle(JettyHandler.java:50)\n\tat org.eclipse.jetty.server.session.SessionHandler.doScope(SessionHandler.java:1568)\n\tat org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:144)\n\tat org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\n\tat org.eclipse.jetty.server.Server.handle(Server.java:503)\n\tat org.eclipse.jetty.server.HttpChannel.handle(HttpChannel.java:364)\n\tat org.eclipse.jetty.server.HttpConnection.onFillable(HttpConnection.java:260)\n\tat org.eclipse.jetty.io.AbstractConnection$ReadCallback.succeeded(AbstractConnection.java:305)\n\tat org.eclipse.jetty.io.FillInterest.fillable(FillInterest.java:103)\n\tat org.eclipse.jetty.io.ChannelEndPoint$2.run(ChannelEndPoint.java:118)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:765)\n\tat org.eclipse.jetty.util.thread.QueuedThreadPool$2.run(QueuedThreadPool.java:683)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\nCaused by: com.project.module.MyProjectFooBarException: The number of FooBars cannot be zero\n\tat com.project.module.MyProject.anotherMethod(MyProject.java:20)\n\tat com.project.module.MyProject.someMethod(MyProject.java:12)\n\tat com.framework.ApplicationStarter.lambda$start$0(ApplicationStarter.java:13)\n\t... 16 more\nCaused by: java.lang.ArithmeticException: The denominator must not be zero\n\tat org.apache.commons.lang3.math.Fraction.getFraction(Fraction.java:143)\n\tat com.project.module.MyProject.anotherMethod(MyProject.java:18)\n\t... 18 more'
```

Would produce:
![Screen Shot 2020-02-04 at 22 58 32](https://user-images.githubusercontent.com/4964249/73786533-263c9500-47a2-11ea-9eeb-1d8353029caa.png)

### Parameters
    -h  highlight strings relevant to devs (such as 'caused by')
    

## Installation
###Global
```
npm install devtext -g
```
###Local project
```
npm install devtext -g
```
And then:
```js
let devText = require('devtext');

console.log(devText('{"menu":{"id":"file","value":"File"}}'));
```

###License
BSD
