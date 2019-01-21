# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When you try to visit "https://techtonic.com/" your computer sends a request to a DNS(Domain Name System) Server so the Domain name can be resolved to a numerical address or IP Address. This IP is like your house address and is a unique address for a system connected to the internet. (The techtonic webserver) If your computer has the IP Address cashed it will then send a request to the server. If it doesn't then the request will be sent to a DNS Sever and then cashed for later use.

## From start to finish how does that data reach you to be rendered in the browser?

Once your computer knows where the techtonic webserver is located, it sends a HTTP/GET request to its unique IP this tells the webserver that your computer wants to receive information from the server in this case it will request the (index.html) file on the root of the server because their was no path attached to the URL(Uniform Resource Locator). Once the web server receives the request it will try to find the file on the server. If the file is not located the server will respond with an error status or (404) or file not found. If the file is found on the server then the file is packaged up into smaller packets and sent back to the client. As well as a (200) or ok status. Since the protocol used is TCP/IP the client sends a receipt for each packet letting the server know the packet was received.

## What code is rendered in the browser?

There are a few different types of code that are rendered in the browser such as HTML, CSS, and Javascript. Javascript can also be ran server-side using a runtime environment like NodeJs.

## What is the server-side code’s main function?

PHP, Java, ASP.NET, Python, Ruby on Rails, and Javascript can be ran server-side and normally are used to access databases store files on the server and do complex tasks like machine learning.

## What is the client-side code’s main function?

The main function of client-side code is to display the interface. It also helps with interaction by storing information in local storage.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance is created for each file need, normally the client will require an HTML file. Often that HTML file will need other files located on the server such as a CSS file, some Javascript files and maybe some fonts from Google Fonts. Each of these will require another HTTP/GET Request.

## How many instances of the server-side code are available at any given time?

Normally one instance of server-side code is available at a time. The client will send a request to the server and the server will complete the request if possible. 

## What is runtime?

A runtime environment is a system that will execute code as a program runs. NodeJs is a Javascript runtime environment and uses Chromes v8 Javascript engine allowing use to run Javascript outside of a web browser.

## How many instances of the databases connected to the server application are created?

Normally one connection to a database is created at a time the server will request data from the database and then send the data to the client. It is good practice to close the connection to the database after you have recived the data needed if the connection is not closed automatically. 
