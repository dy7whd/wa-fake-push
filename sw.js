self.addEventListener('push', function(event) {
    // Fallback für echten Push
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
