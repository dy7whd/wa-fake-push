// Service Worker: Nimmt die Nachricht entgegen und zeigt sie an
self.addEventListener('push', function(event) {
    // Falls Daten vorhanden sind, nutze sie, sonst Standard-WhatsApp
    let data = {};
    if (event.data) {
        data = event.data.json();
    }
    
    const title = data.title || "WhatsApp";
    const options = {
        body: data.message || "Neue Nachricht",
        icon: 'icon.png',
        badge: 'icon.png',
        tag: 'whatsapp-fake'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Klick auf die Benachrichtigung öffnet die App wieder
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
