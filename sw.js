const CACHE_NAME = "sivlin-weather-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./manifest.json"
];


/* =========================================
   INSTALL
========================================= */

self.addEventListener(
    "install",
    event => {

        console.log(
            "Weather Service Worker installing..."
        );

        event.waitUntil(

            caches.open(
                CACHE_NAME
            ).then(
                cache => {

                    return cache.addAll(
                        APP_FILES
                    );

                }
            )

        );

        self.skipWaiting();

    }
);


/* =========================================
   ACTIVATE
========================================= */

self.addEventListener(
    "activate",
    event => {

        console.log(
            "Weather Service Worker activated."
        );


        event.waitUntil(

            caches.keys()
                .then(
                    cacheNames => {

                        return Promise.all(

                            cacheNames
                                .filter(
                                    cacheName =>
                                        cacheName !==
                                        CACHE_NAME
                                )
                                .map(
                                    cacheName =>
                                        caches.delete(
                                            cacheName
                                        )
                                )

                        );

                    }
                )

        );

        self.clients.claim();

    }
);


/* =========================================
   FETCH
========================================= */

self.addEventListener(
    "fetch",
    event => {

        const request =
            event.request;


        /*
         * For API requests:
         * Try network first.
         */

        if (
            request.url.includes(
                "api.open-meteo.com"
            ) ||
            request.url.includes(
                "rss2json.com"
            )
        ) {

            event.respondWith(

                fetch(request)
                    .catch(
                        () => {

                            return new Response(
                                JSON.stringify({
                                    error:
                                        "Offline"
                                }),
                                {
                                    headers: {
                                        "Content-Type":
                                            "application/json"
                                    }
                                }
                            );

                        }
                    )

            );

            return;
        }


        /*
         * For website files:
         * Cache first.
         */

        event.respondWith(

            caches.match(
                request
            )
            .then(
                cachedResponse => {

                    if (
                        cachedResponse
                    ) {

                        return cachedResponse;

                    }


                    return fetch(
                        request
                    )
                    .then(
                        networkResponse => {

                            if (
                                !networkResponse ||
                                networkResponse.status !== 200 ||
                                networkResponse.type === "opaque"
                            ) {

                                return networkResponse;

                            }


                            const responseClone =
                                networkResponse.clone();


                            caches.open(
                                CACHE_NAME
                            )
                            .then(
                                cache => {

                                    cache.put(
                                        request,
                                        responseClone
                                    );

                                }
                            );


                            return networkResponse;

                        }
                    );

                }
            )

        );

    }
);