
# PageSpeedInsights Wrapper

* If you want to test the performance of the webpage.
* You can try this small utility of page speed insights.
* Google provides an API that checks your webpage and gives the proper result with FCP, LCP, CLS, Performance and etc...
* You can also choose the strategy/form factor either desktop or mobile to test the page.

## Access key
* If you want to use this to test good amount of webpage urls than you need an Google Cloud API key.
* Grab the key from here (https://developers.google.com/speed/docs/insights/v5/get-started)
* But if you want to test only few Urls than key is not required.

## API Request Limits

As is the case with most APIs, there is a limit for how many request can be made.
* 25,000 requests / day.
* 1,000 requests per 100 seconds.
* 60 requests per 100 seconds.

## Data Source 
 * Inside ./resources/data.json , You can keep your URL and page name that you want to give.

## How to run 
* open your terminal at root directory and hit - ``` npm i```
* Once it installs hit ``` npm run start ```
* wait till execution completed.
* Now Go to ./Reports/{latest date and time}
* Refer you report corresponding to each URL

## Future Scopes

* You can include jest/mocha related test cases to verify a certain section of properties for which you are looking as high priority

* You can include this as a jenkins pipeline and make it scheduled (Add email capabilities to it )



