self.addEventListener('push', function(event) {
    let data = { title: "WhatsApp", message: "Neue Nachricht" };
    if (event.data) {
        try { data = event.data.json(); } catch (e) { data.message = event.data.text(); }
    }
    
    event.waitUntil(
        self.registration.showNotification(data.title || "WhatsApp", {
            body: data.message || "Neue Nachricht",
            icon: 'icon.png',
            badge: 'icon.png'
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
